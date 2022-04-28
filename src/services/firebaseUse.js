/* eslint-disable no-unused-expressions */
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { child, get, ref, set } from 'firebase/database';
import { auth, db } from './firebaseConfig';

export async function loginDungeongrama({ username, password }) {
  username = `${username}@dungeongrama.com`;
  const logged = await signInWithEmailAndPassword(auth, username, password)
    .then(async (userCredential) => {
      window.localStorage.setItem('user', userCredential.user.uid);

      return [true, userCredential.user.uid, null];
    })
    .catch((error) => {
      const errorCode = error.code;

      return [false, null, filterError(errorCode)];
    });

  return logged;
}

export function logOutDungeongrama() {
  signOut(auth)
    .then(() => {
      window.localStorage.setItem('user', '');

      return null;
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

      return [false, null, filterError(errorCode)];
    });

  return created;
}

function createUserInDB(user) {
  const [username] = user.reloadUserInfo.email.split('@');
  set(ref(db, `users/${user.uid}`), {
    username: username,
    avgTime: 0,
    matches: 0,
    score: 0,
  }).catch((error) => {
    const errorCode = error.code;
    console.log(filterError(errorCode));
  });
}

export async function getUserInRealtimeDatabase(userId = '') {
  const data = await get(child(ref(db), `users/${userId}`))
    .then((snapshot) => {
      const items = [];
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
  return sortDataUsers(data);
}

function sortDataUsers(data) {
  return data.sort((a, b) => b.score - a.score);
}

function filterError(errorCode = '/Erro Desconhecido') {
  [, errorCode] = errorCode.split('/');
  switch (errorCode) {
    case 'wrong-password':
    case 'user-not-found':
      return 'O usuário ou senha está errado';
    case 'email-already-in-use':
      return 'O usuário já existe';
    default:
      return errorCode;
  }
}
