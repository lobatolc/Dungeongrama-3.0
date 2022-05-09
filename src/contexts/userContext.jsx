import React, { useState, createContext, useContext } from 'react';
import { useCookies } from 'react-cookie';

const userCredentialContext = createContext();

export function UserCredentialProvider({ children }) {
  const [userCredential, setUserCredential] = useState('');
  const [cookie] = useCookies(['user', 'logged']);

  async function validateUser() {
    if (!cookie['logged']) {
      window.location.href = '/';
    }
  }

  return (
    <userCredentialContext.Provider
      value={{
        userCredential,
        setUserCredential,
        validateUser,
      }}
    >
      {children}
    </userCredentialContext.Provider>
  );
}

export function useUserCredential() {
  const { userCredential, setUserCredential } = useContext(
    userCredentialContext
  );

  return { userCredential, setUserCredential };
}

export function useValidateUser() {
  const { validateUser } = useContext(userCredentialContext);

  return validateUser;
}
