import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from './firebaseConfig';

export function loginDungeongrama(user) {
  signInWithEmailAndPassword(
    auth,
    `${user.username}@dungeongrama.com`,
    user.password
  )
    .then((userCredential) => {
      alert('logged');
      return true;
    })
    .catch((error) => {
      const errorCode = error.code;

      filterError(errorCode);

      return false;
    });
}

export function logOutDungeongrama() {
  signOut(auth)
    .then(() => {
      // success logout
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
    case 'wrong-password' || 'user-not-found':
      alert('user or password is wrong');
      break;
    case 'email-already-in-use':
      alert('email already in use');
      break;
    default:
      alert('unknown error');
  }
}
