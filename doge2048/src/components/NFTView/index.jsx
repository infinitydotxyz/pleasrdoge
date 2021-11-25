import React from 'react';
import styles from './styles.module.scss';
import dogeShakeSpace2 from '../../img/114/doge-shake-space-114.gif';

export const NFTView = () => {
  return (
    <div className={styles.main}>
      <div
        style={{ backgroundImage: `url(${dogeShakeSpace2})` }}
        className={styles.background}
      ></div>
    </div>
  );
};
