import React, { useState } from 'react';
import styles from './styles.module.scss';

export const ToggleSwitch = () => {
  const [onState, setOnState] = useState(false);
  return (
    <div className={styles.main}>
      <div className={styles.bg}>
        <div
          className={onState ? styles.on : styles.off}
          onClick={() => setOnState(true)}
        >
          <div>NFT</div>
        </div>
        <div
          className={!onState ? styles.on : styles.off}
          onClick={() => setOnState(false)}
        >
          <div>Game</div>
        </div>
      </div>
    </div>
  );
};
