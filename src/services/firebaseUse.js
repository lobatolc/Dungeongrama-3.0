import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from './firebaseConfig';

export async function loginDungeongrama({ username, password }) {
  username = `${username}@dungeongrama.com`;
  const logged = await signInWithEmailAndPassword(auth, username, password)
    .then((userCredential) => {
      window.localStorage.setItem('user', userCredential.user.uid);

      return [true, userCredential.user.uid];
    })
    .catch((error) => {
      const errorCode = error.code;

      filterError(errorCode);
      return [false];
    });

  return logged;
}

export function logOutDungeongrama() {
  signOut(auth)
    .then(() => {
      window.localStorage.setItem('user', '');
      return true;
    })
    .catch((error) => {
      const errorCode = error.code;

      filterError(errorCode);

      return false;
    });
}

export function createUser(user) {
  createUserWithEmailAndPassword(
    auth,
    `${user.username}@dungeongrama.com`,
    user.password
  )
    .then((userCredential) => {
      alert('created user');
      loginDungeongrama(user);
      return true;
    })
    .catch((error) => {
      const errorCode = error.code;

      filterError(errorCode);

      return false;
    });
}

function filterError(errorCode) {
  [, errorCode] = errorCode.split('/');
  switch (errorCode) {
    case 'wrong-password':
    case 'user-not-found':
      alert('user or password is wrong');
      break;
    case 'email-already-in-use':
      alert('username already in use');
      break;
    default:
      alert(errorCode);
  }
}
