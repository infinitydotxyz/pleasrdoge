import React from 'react';
import styles from './styles.module.scss';
import { ToggleSwitch } from '../ToggleSwitch';
import { Header } from '../Header';
import { GameGrid } from '../GameGrid';
import { NFTView } from '../NFTView';
import { UnlockedColumn } from '../UnlockedColumn';
import { Information } from '../Information';
import { Instructions } from '../Instructions';
import Button from '@mui/material/Button';
import { TokensEarned } from '../TokensEarned';

export const MainContent = () => {
  const [nftMode, setNftMode] = React.useState(false);
  const [showInstructions, setShowInstructions] = React.useState(false);
  const [showInformation, setShowInformation] = React.useState(false);

  let contents;

  if (showInstructions) {
    contents = <Instructions onClose={() => setShowInstructions(false)} />;
  } else if (showInformation) {
    contents = <Information onClose={() => setShowInformation(false)} />;
  } else {
    if (nftMode) {
      contents = <NFTView />;
    } else {
      contents = <GameGrid />;
    }
  }

  return (
    <div className={styles.main}>
      <ToggleSwitch
        onChange={(value) => {
          setNftMode(value);
        }}
      />

      <div className={styles.gameColumn}>
        <Header />
        {contents}

        <div className={styles.buttons}>
          <Button
            className={styles.btn}
            variant="contained"
            onClick={() => {
              setShowInstructions(true);
              setShowInformation(false);
            }}
          >
            Instructions
          </Button>
          <div style={{ width: 20 }} />
          <Button
            className={styles.btn}
            variant="contained"
            onClick={() => {
              setShowInstructions(false);
              setShowInformation(true);
            }}
          >
            Information
          </Button>
        </div>
      </div>

      <div className={styles.rightSide}>
        <TokensEarned />
        <UnlockedColumn />
        <div style={{ height: 20 }} />
        <Button variant="contained">Save Progress</Button>
      </div>
    </div>
  );
};
