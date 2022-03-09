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
      console.log('then')
      return null;
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log('catch')
      return filterError(errorCode);
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
      return 'O usuário ou senha está errado';
    case 'email-already-in-use':
      return 'O usuário já existe';
    default:
      return errorCode;
  }
}
