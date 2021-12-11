import React, { createContext, useState } from 'react';
import { HostMessenger } from './hostMessenger';

export const Context = createContext();

let sharedMessenger;

export const Provider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [address, setAddress] = useState('');
  const [numPlays, setNumPlays] = useState(0);

  if (!sharedMessenger) {
    sharedMessenger = new HostMessenger((message) => {
      console.log(message);

      setAddress(message.data);
    });

    sharedMessenger.requestAddress();
  }

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
