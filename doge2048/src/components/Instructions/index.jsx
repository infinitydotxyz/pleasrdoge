import { IconButton } from '@mui/material';
import React from 'react';
import styles from './styles.module.scss';
import ClearIcon from '@mui/icons-material/Clear';

export const Instructions = ({ onClose }) => {
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
          1. Use your arrow keys or swipe to combine similar Doges and score
          points!
        </div>
        <div className={styles.line}>2. Unlock all 15 Doges to win</div>
      </div>
    </div>
  );
};
