import { IconButton } from '@mui/material';
import React from 'react';
import styles from './styles.module.scss';
import ClearIcon from '@mui/icons-material/Clear';

export const Information = ({ onClose }) => {
  return (
    <div className={styles.main}>
      <div className={styles.closeButton}>
        <IconButton onClick={onClose} aria-label="delete" size="small">
          <ClearIcon />
        </IconButton>
      </div>
      <div className={styles.instructions}>
        <div className={styles.title}>Information</div>
        <div className={styles.line}>
          Doge-ified by
          <a href="http://tinymammals.com" target="_blank" rel="noreferrer">
            Tiny Mammals.
          </a>
        </div>

        <div className={styles.line}>
          2048 Created by{' '}
          <a href="http://gabrielecirulli.com" target="_blank" rel="noreferrer">
            Gabriele Cirulli.
          </a>
        </div>

        <div className={styles.line}>
          Based on{' '}
          <a
            href="https://itunes.apple.com/us/app/1024!/id823499224"
            target="_blank"
            rel="noreferrer"
          >
            1024 by Veewo Studio
          </a>{' '}
          and conceptually similar to{' '}
          <a href="http://asherv.com/threes/" target="_blank" rel="noreferrer">
            Threes by Asher Vollmer.
          </a>
        </div>
      </div>
    </div>
  );
};
