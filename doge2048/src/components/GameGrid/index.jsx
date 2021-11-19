import React from 'react';
import styles from './styles.module.scss';
import { UnlockedColumn } from '../UnlockedColumn';
import KeyboardInputShared from '../../js/keyboard_input_manager';

export const GameGrid = () => {
  return (
    <div className={styles.gridRow}>
      <div className={styles.leftSide}>
        <div className="game-container">
          <div className="doge-says">
            <p></p>
          </div>
          <div className="info">
            <p>
              Use your arrow keys or swipe to combine similar Doges and score
              points!{' '}
            </p>
            <p>Unlock all 11 doges to win!</p>
            <p>
              {' '}
              Doge-ified by{' '}
              <a href="http://tinymammals.com" target="_blank" rel="noreferrer">
                Tiny Mammals.
              </a>
            </p>
            <p>
              {' '}
              2048 Created by{' '}
              <a
                href="http://gabrielecirulli.com"
                target="_blank"
                rel="noreferrer"
              >
                Gabriele Cirulli.
              </a>
            </p>
            <p>
              Based on{' '}
              <a
                href="https://itunes.apple.com/us/app/1024!/id823499224"
                target="_blank"
                rel="noreferrer"
              >
                1024 by Veewo Studio
              </a>{' '}
              and conceptually similar to{' '}
              <a
                href="http://asherv.com/threes/"
                target="_blank"
                rel="noreferrer"
              >
                Threes by Asher Vollmer.
              </a>
            </p>
          </div>
          <div className="game-message">
            <p></p>
            <div className="lower">
              <div className="keep-playing-button btn">Keep going</div>
              <div
                className="retry-button btn"
                onClick={() => {
                  KeyboardInputShared.restart();
                }}
              >
                Try again
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

      <div className={styles.rightSide}>
        <UnlockedColumn />
      </div>
    </div>
  );
};
