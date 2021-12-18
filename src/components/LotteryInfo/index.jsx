import React, { useContext } from 'react';
import styles from './styles.module.scss';
import { Countdown } from '../Countdown';
import { Context } from '../../js/Context';

export const LotteryInfo = ({ onChange }) => {
  const { numPlays } = useContext(Context);

  const expiryTimestamp = new Date(Date.parse('2/07/22'));

  return (
    <div className={styles.main}>
      <div className={styles.title}>Doge 2048 Lottery</div>

      <div className={styles.rows}>
        <div className={styles.row}>
          <div>Lottery Countdown</div>
          <div style={{ display: 'flex', flex: 1 }} />
          <Countdown expiryTimestamp={expiryTimestamp} />
        </div>

        <div className={styles.row}>
          <div>Total Prize</div>

          <div style={{ display: 'flex', flex: 1 }} />
          <div>69,000 DOG</div>
        </div>

        <div className={styles.row}>
          <div>Your Plays</div>

          <div style={{ display: 'flex', flex: 1 }} />
          <div>{numPlays}</div>
        </div>
      </div>
    </div>
  );
};
