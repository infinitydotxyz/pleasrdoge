import styles from './styles.module.scss';
import { Context } from '../../Context';
import React, { useContext } from 'react';

export const UnlockedColumn = () => {
  const { state } = useContext(Context);

  return (
    <div className={styles.main}>
      <div className={styles.item}>
        <div>{state.score}</div>
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
