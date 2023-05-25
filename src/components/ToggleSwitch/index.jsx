import React, { useState } from 'react';
import styles from './styles.module.scss';

export const ToggleSwitch = ({ onChange }) => {
  const [onState, setOnState] = useState(false);

  const handleClick = (value) => {
    setOnState(value);

    onChange(value);
  };

  return (
    <div className={styles.main}>
      <div className={styles.bg}>
        <div
          className={onState ? styles.on : styles.off}
          onClick={() => handleClick(true)}
        >
          <div>NFT</div>
        </div>
        <div
          className={!onState ? styles.on : styles.off}
          onClick={() => handleClick(false)}
        >
          <div>Game</div>
        </div>
      </div>
    </div>
  );
};
