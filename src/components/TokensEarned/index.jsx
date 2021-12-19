import React from 'react';
import styles from './styles.module.scss';
import Button from '@mui/material/Button';
import SharedMessenger from '../../js/hostMessenger';

export const TokensEarned = () => {
  return (
    <div className={styles.main}>
      <div className={styles.board}>
        <div className={styles.left}>
          <div className={styles.title}>Dog balance</div>
          <div className={styles.subtitle}>20/80</div>
        </div>

        <div className={styles.right}>
          <Button
            variant="contained"
            size="small"
            style={{
              backgroundColor: 'blue',
              color: 'white',
              fontSize: '.7rem',
            }}
            onClick={() => {
              SharedMessenger.depositDog();
            }}
          >
            Deposit
          </Button>
        </div>
      </div>
    </div>
  );
};
