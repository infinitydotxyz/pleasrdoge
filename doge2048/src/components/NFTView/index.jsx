import React, { useContext } from 'react';
import styles from './styles.module.scss';
import { Context } from '../../js/Context';

export const NFTView = () => {
  const { nftImage } = useContext(Context);

  return (
    <div className={styles.main}>
      <div
        style={{ backgroundImage: `url(${nftImage})` }}
        className={styles.background}
      ></div>
    </div>
  );
};
