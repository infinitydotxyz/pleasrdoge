import React, { createContext, useState } from 'react';
import SharedMessenger from './hostMessenger';

export const Context = createContext();

export const Provider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [address, setAddress] = useState('');
  const [levelImages, setLevelImages] = useState([]);
  const [nftImage, setNftImage] = useState('');

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
    setAddress,
    levelImages,
    nftImage,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
