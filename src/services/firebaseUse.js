import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { child, get, ref, set } from 'firebase/database';
import { auth, db } from './firebaseConfig';

import { StageModel } from '../models/models';

export async function loginDungeongrama({ username, password }) {
  username = `${username}@dungeongrama.com`;
  const logged = await signInWithEmailAndPassword(auth, username, password)
    .then((userCredential) => {
      return [true, null, userCredential.user.uid];
    })
    .catch((error) => {
      const errorCode = error.code;

      return [false, filterError(errorCode)];
    });

  return logged;
}

export function logOutDungeongrama() {
  signOut(auth)
    .then(() => {
      return true;
    })
    .catch((error) => {
      const errorCode = error.code;

      return filterError(errorCode);
    });
}

export async function createUserFB(user) {
  const created = await createUserWithEmailAndPassword(
    auth,
    `${user.username}@dungeongrama.com`,
    user.password
  )
    .then((userCredential) => {
      loginDungeongrama(user);
      createUserInDB(userCredential.user);
      return [true, userCredential.user.uid, null];
    })
    .catch((error) => {
      const errorCode = error.code;

      return [false, filterError(errorCode)];
    });

  return created;
}

function createUserInDB(user) {
  const [username] = user.reloadUserInfo.email.split('@');
  set(ref(db, `users/${user.uid}`), {
    username: username,
    avgTime: 0,
    matches: 0,
    gamesPlayed: 0,
    maxScore: 0,
    lastLevelClear: 0,
    scoreStage: createScoreStageUser()
  }).catch((error) => {
    const errorCode = error.code;
    console.log(filterError(errorCode));
  });
}

function createScoreStageUser() {
  const scoreStage = {};
  for (let i = 0; i < 10; i++) {
    scoreStage[`stage ${i + 1}`] = i === 0 ? StageModel(i, true) : StageModel(i)
  }

  return scoreStage;
}

export async function getUserInRealtimeDatabase(userId = '') {
  let data = await get(child(ref(db), `users/${userId}`))
    .then((snapshot) => {
      let items = [];
      if (snapshot.exists()) {
        snapshot.forEach((user) => {
          items.push(user.val());
        });
      } else {
        return [];
      }
      return items;
    })
    .catch((error) => {
      console.error(error);
    });
  if (userId === '') {
    data = setMaxScoreUse(data)
  } else {
    data = setMaxScoreOneUser(data)
  }

  return sortDataUsers(data);
}

function setMaxScoreUse(users) {
  users.map(user => {
    for (let stage in user.scoreStage) {
      user['maxScore'] += user.scoreStage[stage].score
      user['gamesPlayed'] += user.scoreStage[stage].countAttempts
      console.log(user.scoreStage[stage].countAttempts)
    }
  })
  return users
}

function setMaxScoreOneUser(user) {
  let totalScore = 0;
  let gamesPlayed = 0;
  for (let stage in user[5]) {
    totalScore += user[5][stage].score
    gamesPlayed += user[5][stage].countAttempts
  }
  user[4] = totalScore
  user[1] = gamesPlayed
  return user
}

function sortDataUsers(data) {
  return data.sort((a, b) => b.maxScore - a.maxScore);
}

export async function updateScoreInStage(user, stage = 'stage 1', timeClear = 0, percentComplete = 0, useHint = false, countAttempts = 1) {
  const userDB = await getUserInRealtimeDatabase(user)

  const [, stageNumber] = stage.split(' ')
  const nextStage = `stage ${parseInt(stageNumber) + 1}`
  const stringForUpdate = `users/${user}/scoreStage`;
  console.log(percentComplete)
  let score = (1000 - timeClear) * percentComplete;

  percentComplete = percentComplete*100
  countAttempts += userDB[5][stage].countAttempts
  for (let i = 1; i > countAttempts; i++) {
    score *= 0.995
  }

  score = Math.round(score)
  score = score > 0 ? score : 0

  const clear = percentComplete >= 80
  timeClear = formatStopWatch(timeClear)
  if (score > userDB[5][stage].score) {
    //console.log("?? maior")
    set(ref(db, `${stringForUpdate}/${stage}`), {
      clear,
      percentComplete,
      score,
      stage,
      timeClear,
      unlock: true,
      useHint,
      countAttempts
    }).catch(error => {
      const errorCode = error.code
      console.log(filterError(errorCode));
    })

    if (clear && !(userDB[5][nextStage].unlock)) {
      set(ref(db, `${stringForUpdate}/${nextStage}`), StageModel(parseInt(stageNumber), clear)).catch(error => {
        const errorCode = error.code
        console.log(filterError(errorCode));
      })
    }
  } else {
    //console.log("n??o ?? maior")
    set(ref(db, `${stringForUpdate}/${stage}`), {
      ...userDB[5][stage],
      countAttempts
    }).catch(error => {
      const errorCode = error.code
      console.log(filterError(errorCode));
    })
  }
  console.log(score)
  var status = [score, countAttempts]
  return status
}

function formatStopWatch(time){
  var auxHour =(time / 3600).toFixed(0);
  var auxMinute = parseInt((time % 3600) / 60);
  var auxSecond = parseInt((time % 3600) % 60);
  var auxStopwatch =
      (auxHour > 9 ? auxHour : '0' + auxHour) +
          ' : ' +
      (auxMinute > 9 ? auxMinute : '0' + auxMinute) +
          ' : ' +
      (auxSecond > 9 ? auxSecond : '0' + auxSecond);
  return auxStopwatch
}

function filterError(errorCode = '/Erro Desconhecido') {
  [, errorCode] = errorCode.split('/');
  switch (errorCode) {
    case 'wrong-password':
    case 'user-not-found':
      return 'O usu??rio ou senha est?? errado';
    case 'email-already-in-use':
      return 'O usu??rio j?? existe';
    default:
      return errorCode;
  }
}
