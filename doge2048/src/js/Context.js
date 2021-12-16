import React, { createContext, useState } from 'react';
import SharedMessenger from './hostMessenger';

export const Context = createContext();

export const Provider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [address, setAddress] = useState('');
  const [numPlays, setNumPlays] = useState(0);
  const [levelImages, setLevelImages] = useState([]);

  React.useMemo(() => {
    SharedMessenger.addListener((data) => {
      if (data && data.from === 'host') {
        switch (data.message) {
          case 'address':
            setAddress(data.param);
            break;

          case 'level-images':
            setLevelImages(JSON.parse(data.param));
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
    levelImages,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
