import React, { useState, createContext, useContext } from 'react';

const userCredentialContext = createContext();

export function UserCredentialProvider({ children }) {
  const [userCredential, setUserCredential] = useState('');

  async function validateUser() {
    const user = window.localStorage.getItem('user');

    if (user != userCredential) {
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
