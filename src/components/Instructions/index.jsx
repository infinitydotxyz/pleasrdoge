import { IconButton } from '@mui/material';
import React from 'react';
import styles from './styles.module.scss';
import ClearIcon from '@mui/icons-material/Clear';
import Button from '@mui/material/Button';

export const Instructions = ({ onClose }) => {
  const mintNFT = () => {
    // mint nft here
  };

  return (
    <div className={styles.main}>
      <div className={styles.closeButton}>
        <IconButton onClick={onClose} aria-label="delete" size="small">
          <ClearIcon />
        </IconButton>
      </div>
      <div className={styles.instructions}>
        <div className={styles.title}>Instructions</div>
        <div className={styles.line}>
          1. Each player needs to hold a Doge 2048 NFT to play, earn, and update
          their pfp
        </div>

        <div className={styles.mintButton}>
          <Button
            onClick={() => {
              mintNFT();
            }}
            variant="contained"
          >
            Mint Doge 2048 NFT
          </Button>
        </div>

        <div className={styles.line}>
          2. The NFT comes embedded with 100 DOG and it costs 1 DOG to play each
          round
        </div>
        <div className={styles.line}>
          3. Use your arrow keys or swipe to combine similar Doges and score
          points!
        </div>
        <div className={styles.line}>
          4. The NFT pfp will change as you play the game and complete the
          levels
        </div>
        <div className={styles.line}>
          5. Click to save your progress, which will save your score and update
          the pfp
        </div>
        <div className={styles.line}>
          6. All DOG tokens used to play will be distributed in a lottery every
          3 days. The more plays, the higher the chance
        </div>
      </div>
    </div>
  );
};
