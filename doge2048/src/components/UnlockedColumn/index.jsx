import styles from './styles.module.scss';
import { Context } from '../../Context';
import React, { useContext, useEffect } from 'react';

export const UnlockedColumn = () => {
  const { score, setScore } = useContext(Context);

  useEffect(() => {
    const onScroll = (event) => {
      setScore(event.detail.score);
    };

    document.addEventListener('score', onScroll);

    return () => {
      document.removeEventListener('score', onScroll);
    };
  }, [setScore]);

  return (
    <div className={styles.main}>
      <div className={styles.item}>
        <div>{score}</div>
      </div>

      <div className={styles.item}>
        <div>2048</div>
      </div>

      <div className={styles.item}>
        <div>4096</div>
      </div>

      <div className={styles.item}>
        <div>8192</div>
      </div>
    </div>
  );
};
