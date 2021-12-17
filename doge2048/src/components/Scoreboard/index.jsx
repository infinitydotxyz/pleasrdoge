import React, { useContext } from 'react';
import styles from './styles.module.scss';
import { Context } from '../../js/Context';

export const Scoreboard = () => {
  const { highScore, score } = useContext(Context);

  return (
    <div className={styles.main}>
      <div className={styles.scoreContainer}>
        <div className={styles.scoreContainerTitle}>Score</div>
        <div className={styles.scoreContainerText}>{score}</div>
      </div>
      <div style={{ width: 6 }} />
      <div className={styles.scoreContainer}>
        <div className={styles.scoreContainerTitle}>Best</div>
        <div className={styles.scoreContainerText}> {highScore}</div>
      </div>
    </div>
  );
};
