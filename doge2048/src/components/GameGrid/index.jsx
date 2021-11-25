import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import { GameManager } from '../../js/game_manager';

export const GameGrid = () => {
  useEffect(() => {
    new GameManager(4);
  });
  return (
    <div className={styles.gridRow}>
      <div className={styles.leftSide}>
        <div className="game-container">
          <div className="doge-says">
            <p></p>
          </div>

          <div className="game-message">
            <p></p>
            <div className="lower">
              <div className="keep-playing-button btn">Keep going</div>
              <div className="retry-button btn">Try again</div>
            </div>
          </div>
          <div className="tile-container"></div>

          <div className="grid-container">
            <div className="grid-row">
              <div className="grid-cell"></div>
              <div className="grid-cell"></div>
              <div className="grid-cell"></div>
              <div className="grid-cell"></div>
            </div>
            <div className="grid-row">
              <div className="grid-cell"></div>
              <div className="grid-cell"></div>
              <div className="grid-cell"></div>
              <div className="grid-cell"></div>
            </div>
            <div className="grid-row">
              <div className="grid-cell"></div>
              <div className="grid-cell"></div>
              <div className="grid-cell"></div>
              <div className="grid-cell"></div>
            </div>
            <div className="grid-row">
              <div className="grid-cell"></div>
              <div className="grid-cell"></div>
              <div className="grid-cell"></div>
              <div className="grid-cell"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
