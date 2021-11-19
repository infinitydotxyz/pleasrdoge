import React from 'react';
import styles from './styles.module.scss';
import { ToggleSwitch } from '../ToggleSwitch';
import { GameGrid } from '../GameGrid';
import { NFTView } from '../NFTView';
import { UnlockedColumn } from '../UnlockedColumn';

export const MainContent = () => {
  const [nftMode, setNftMode] = React.useState(false);

  return (
    <div className={styles.main}>
      <ToggleSwitch
        onChange={(value) => {
          setNftMode(value);
        }}
      />

      {!nftMode && <GameGrid />}
      {nftMode && <NFTView />}

      <div className={styles.rightSide}>
        <UnlockedColumn />
      </div>
    </div>
  );
};
