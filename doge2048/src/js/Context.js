import React, { createContext, useState } from 'react';
import { HostMessenger } from './hostMessenger';

export const Context = createContext();

export const Provider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [address, setAddress] = useState('');
  const [numPlays, setNumPlays] = useState(0);

  React.useEffect(() => {
    const result = new HostMessenger((message) => {
      console.log(message);

      setAddress(message.param);
    });

    result.requestAddress();

    return () => {
      result.dispose();
    };
  }, []);

  const value = {
    score,
    setScore,
    address,
    setAddress,
    numPlays,
    setNumPlays,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
