import styles from './styles.module.scss';
import { Context } from '../../js/Context';
import React, { useContext, useEffect } from 'react';
import doge from '../../img/doge.png';
import blueStrips from '../../img/Backgrounds/blueStripes.gif';
import clouds from '../../img/Backgrounds/clouds.gif';
import gold from '../../img/Backgrounds/gold.gif';
import greenScreen from '../../img/Backgrounds/greenScreen.png';
import matrix from '../../img/Backgrounds/matrix.gif';
import moon from '../../img/Backgrounds/moon.gif';
import nightClub from '../../img/Backgrounds/nightClub.gif';
import nyan from '../../img/Backgrounds/nyan.gif';
import orange from '../../img/Backgrounds/orange.png';
import pinkStripes from '../../img/Backgrounds/pinkStripes.gif';
import pizza from '../../img/Backgrounds/pizza.gif';
import purple from '../../img/Backgrounds/purple.png';
import sushi from '../../img/Backgrounds/sushi.gif';
import tacos from '../../img/Backgrounds/tacos.gif';
import trippySwirl from '../../img/Backgrounds/trippySwirl.gif';

export const UnlockedColumn = () => {
  const { score, setScore } = useContext(Context);

  useEffect(() => {
    const onEvent = (event) => {
      setScore(event.detail.score);
    };

    document.addEventListener('score', onEvent);

    return () => {
      document.removeEventListener('score', onEvent);
    };
  }, [setScore]);

  const backgroundForIndex = (index) => {
    const images = [
      purple,
      greenScreen,
      orange,
      pinkStripes,
      blueStrips,
      moon,
      nyan,
      tacos,
      pizza,
      sushi,
      matrix,
      nightClub,
      trippySwirl,
      clouds,
      gold,
    ];

    return images[index];
  };

  const grid = [];

  for (let i = 0; i < 15; i++) {
    grid.push(
      <div key={`${i} key`} className={styles.item}>
        <div
          style={{ backgroundImage: `url(${backgroundForIndex(i)})` }}
          className={styles.background}
        />

        <div
          style={{ backgroundImage: `url(${doge})` }}
          className={styles.background}
        />

        {score < i * 1000 && (
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
