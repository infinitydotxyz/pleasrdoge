import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { GameManager } from '../../js/game_manager';
import SharedMessenger from '../../js/hostMessenger';

export const GameGrid = () => {
  const [gameManager, setGameManager] = useState();

  useEffect(() => {
    const gm = new GameManager(4);
    setGameManager(gm);
  }, []);

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
              <div
                onClick={() => {
                  SharedMessenger.sendSaveState(gameManager.score);
                  gameManager.restart();
                }}
                className="btn"
              >
                Save to NFT
              </div>
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
