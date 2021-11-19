import styles from './UnlockedColumn.module.scss';

export const UnlockedColumn = () => {
  return (
    <div className={styles.main}>
      <div className={styles.item}>
        <div>1024</div>
      </div>

      <div className={styles.item}>
        <div>2048</div>
      </div>

      <div className={styles.item}>
        <div>4096</div>
      </div>

      <div className={styles.item}>
        <div>8192</div>
      </div>
    </div>
  );
};
