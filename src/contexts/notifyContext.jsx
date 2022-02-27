import React, { createContext, useState, useContext } from 'react';

const NotifyContext = createContext();

export default function NotifyProvider(props) {
  const [notifys, setNotifys] = useState({
    log: '',
    type: 0,
    time: Date.now(),
  });

  return (
    <NotifyContext.Provider value={{ notifys, setNotifys }}>
      {props?.children}
    </NotifyContext.Provider>
  );
}

export function useNotifys() {
  const { notifys, setNotifys } = useContext(NotifyContext);
  return { notifys, setNotifys };
}
