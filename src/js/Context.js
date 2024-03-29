import React, { createContext, useState } from 'react';
import SharedMessenger from './hostMessenger';

export const Context = createContext();

export const Provider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [numPlays, setNumPlays] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [dogBalance, setDogBalance] = useState(0);
  const [address, setAddress] = useState('');
  const [levelImages, setLevelImages] = useState([]);
  const [nftImage, setNftImage] = useState('');

  React.useMemo(() => {
    SharedMessenger.addListener((data) => {
      if (data && data.from === 'host') {
        switch (data.message) {
          case 'game-state':
            const map = JSON.parse(data.param);
            setAddress(map['address']);
            setNumPlays(map['numPlays']);
            setHighScore(map['highScore']);
            setDogBalance(map['dogBalance']);
            break;

          case 'level-images':
            setLevelImages(JSON.parse(data.param));
            break;

          case 'nft-image':
            setNftImage(data.param);
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
    levelImages,
    numPlays,
    highScore,
    nftImage,
    setHighScore,
    dogBalance,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
