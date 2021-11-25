import React from 'react';
import styles from './styles.module.scss';

export const Header = () => {
  return (
    <div className={styles.main}>
      <h1 className="title">
        <span>DOGE</span>
        <span style={{ color: 'red' }}>2</span>
        <span style={{ color: '#00FF00' }}>0</span>
        <span style={{ color: 'blue' }}>4</span>
        <span style={{ color: '#00FFFF' }}>8</span>
      </h1>
      <div className="scores-container">
        <div className="score-container">0</div>
        <div className="best-container">0</div>
      </div>
    </div>
  );
};
