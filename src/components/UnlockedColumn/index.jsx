import styles from './styles.module.scss';
import { Context } from '../../js/Context';
import React, { useContext, useEffect } from 'react';
import doge from '../../img/doge.png';
// import blueStrips from '../../img/Backgrounds/blueStripes.gif';
// import clouds from '../../img/Backgrounds/clouds.gif';
// import gold from '../../img/Backgrounds/gold.gif';
import greenScreen from '../../img/Backgrounds/greenScreen.png';
// import matrix from '../../img/Backgrounds/matrix.gif';
// import moon from '../../img/Backgrounds/moon.gif';
// import nightClub from '../../img/Backgrounds/nightClub.gif';
// import nyan from '../../img/Backgrounds/nyan.gif';
// import orange from '../../img/Backgrounds/orange.png';
// import pinkStripes from '../../img/Backgrounds/pinkStripes.gif';
// import pizza from '../../img/Backgrounds/pizza.gif';
// import purple from '../../img/Backgrounds/purple.png';
// import sushi from '../../img/Backgrounds/sushi.gif';
// import tacos from '../../img/Backgrounds/tacos.gif';
// import trippySwirl from '../../img/Backgrounds/trippySwirl.gif';

const levelScores = [
  {
    min: 0,
    max: 43,
  },
  {
    min: 44,
    max: 124,
  },
  {
    min: 125,
    max: 316,
  },
  {
    min: 317,
    max: 764,
  },
  {
    min: 765,
    max: 1788,
  },
  {
    min: 1789,
    max: 4092,
  },
  {
    min: 4093,
    max: 9212,
  },
  {
    min: 9213,
    max: 20476,
  },
  {
    min: 20477,
    max: 45052,
  },
  {
    min: 45053,
    max: 98300,
  },
  {
    min: 98301,
    max: 212988,
  },
  {
    min: 212989,
    max: 458748,
  },
  {
    min: 458749,
    max: 983036,
  },
  {
    min: 983037,
    max: 2097148,
  },
  {
    min: 2097149,
    max: Infinity,
  },
];

export const UnlockedColumn = () => {
  const { score, setScore, highScore, setHighScore, levelImages } =
    useContext(Context);

  useEffect(() => {
    const onEvent = (event) => {
      setScore(event.detail.score);

      if (event.detail.score > highScore) {
        setHighScore(event.detail.score);
      }
    };

    document.addEventListener('score', onEvent);

    return () => {
      document.removeEventListener('score', onEvent);
    };
  }, [setScore, setHighScore, highScore]);

  const levelForScore = (lscore) => {
    for (let index = 0; index < levelScores.length; index++) {
      const item = levelScores[index];

      if (lscore >= item.min && lscore <= item.max) {
        return index;
      }
    }

    return 0;
  };

  const dogeOnBackground = levelImages.length === 0;

  const backgroundForIndex = (index) => {
    if (levelImages.length > 0) {
      return levelImages[index];
    }

    const images = [
      // purple,
      greenScreen,
      // orange,
      // pinkStripes,
      // blueStrips,
      // moon,
      // nyan,
      // tacos,
      // pizza,
      // sushi,
      // matrix,
      // nightClub,
      // trippySwirl,
      // clouds,
      // gold,
    ];

    return images[0]; // just use green
  };

  const grid = [];

  const level = levelForScore(score);

  for (let i = 0; i < 15; i++) {
    grid.push(
      <div key={`${i} key`} className={styles.item}>
        <div
          style={{ backgroundImage: `url(${backgroundForIndex(i)})` }}
          className={styles.background}
        />

        {dogeOnBackground && (
          <div
            style={{ backgroundImage: `url(${doge})` }}
            className={styles.background}
          />
        )}

        {i > level && (
          <div className={styles.overlay}>
            <div className={styles.content}>
              <div className={styles.first}>Level</div>
              <div>{`#${i}`}</div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={styles.main}>
      <div className={styles.title}>NFT Levels</div>

      <div className={styles.grid}>{grid}</div>
    </div>
  );
};
