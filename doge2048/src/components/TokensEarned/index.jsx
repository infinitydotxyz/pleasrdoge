import React from 'react';
import styles from './styles.module.scss';

export const TokensEarned = () => {
  return (
    <div className={styles.main}>
      <div className={styles.board}>
        <div className={styles.title}>Doge tokens earned</div>
        <div className={styles.subtitle}>20 / 80</div>
      </div>
      <div className={styles.board}>
        <div className={styles.title}>Matic</div>
        <div className={styles.subtitle}>0</div>
      </div>
    </div>
  );
};
