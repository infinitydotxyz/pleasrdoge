import React from 'react';
import { useTimer } from 'react-timer-hook';
import styles from './styles.module.scss';

export const Countdown = ({ expiryTimestamp }) => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.log('onExpire called'),
  });

  const zero = (num) => {
    let result = num.toString();

    if (num < 10) {
      result = `0${result}`;
    }

    return result;
  };

  return (
    <div className={styles.main}>
      <div className={styles.digit}>
        <div>{zero(days)}</div>
        <div className={styles.unit}>:</div>
      </div>

      <div className={styles.digit}>
        <div>{zero(hours)}</div>
        <div className={styles.unit}>:</div>
      </div>

      <div className={styles.digit}>
        <div>{zero(minutes)}</div>
        <div className={styles.unit}>:</div>
      </div>

      <div className={styles.digit}>
        <div>{zero(seconds)}</div>
      </div>
    </div>
  );
};
