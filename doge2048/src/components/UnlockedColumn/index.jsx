import styles from './styles.module.scss';
import { Context } from '../../Context';
import React, { useContext, useEffect } from 'react';
import dogeHat from '../../img/212/doge-hat-212.gif';

export const UnlockedColumn = () => {
  const { score, setScore } = useContext(Context);

  useEffect(() => {
    const onEvent = (event) => {
      setScore(event.detail.score);
    };

    document.addEventListener('score', onEvent);

    return () => {
      document.removeEventListener('score', onEvent);
    };
  }, [setScore]);

  const grid = [];

  for (let i = 0; i < 15; i++) {
    grid.push(
      <div className={styles.item}>
        <div
          style={{ backgroundImage: `url(${dogeHat})` }}
          className={styles.background}
        />

        {score < i * 200 && (
          <div className={styles.overlay}>
            <div className={styles.content}>
              <div className={styles.first}>{`L${i + 1}`}</div>
              <div>{`1,000 pts`}</div>
              <div>needed</div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={styles.main}>
      <div className={styles.title}>NFT Levels</div>

      <div className={styles.grid}>{grid}</div>
    </div>
  );
};
