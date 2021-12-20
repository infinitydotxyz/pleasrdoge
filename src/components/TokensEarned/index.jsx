import React, { useContext } from 'react';
import styles from './styles.module.scss';
import Button from '@mui/material/Button';
import SharedMessenger from '../../js/hostMessenger';
import { Context } from '../../js/Context';

export const TokensEarned = () => {
  const { dogBalance } = useContext(Context);

  return (
    <div className={styles.main}>
      <div className={styles.board}>
        <div className={styles.left}>
          <div className={styles.title}>Dog balance</div>
          <div className={styles.subtitle}>{dogBalance}</div>
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
