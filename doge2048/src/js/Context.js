import React, { createContext, useState } from 'react';
import SharedMessenger from './hostMessenger';

export const Context = createContext();

export const Provider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [address, setAddress] = useState('');
  const [numPlays, setNumPlays] = useState(0);

  React.useMemo(() => {
    SharedMessenger.addListener((data) => {
      if (data && data.from === 'game') {
        console.log(data);
        switch (data.message) {
          case 'address':
            setAddress(data.param);

            break;
          default:
            console.log(
              `SharedMessenger.addListener not handled : ${data.message}`
            );
            break;
        }
      }
    });
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
