import React from 'react';
import styles from './ImageBuilder.module.scss';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import redEye from '../../img/doge/Stars/Orange.png';
import hat from '../../img/doge/Hats/BTC.png';
import necklace from '../../img/doge/Necklace/Bronze.png';

export const ImageBuilder = () => {
  const ref = React.useRef();

  const doCapture = () => {
    const options = {
      scale: 1,
    };

    html2canvas(ref.current, options).then((canvas) => {
      canvas.toBlob(
        function (blob) {
          saveAs(blob, 'doge.png');
        },
        'image/png',
        0.5
      );
    });
  };

  const content = () => {
    return (
      <>
        <button onClick={doCapture}>capture</button>
        <div ref={ref} className={styles.capture}>
          <div className={styles.hero} />

          <div className={styles.content}>
            <div
              className={styles.leftEye}
              style={{ backgroundImage: `url(${redEye})` }}
            />

            <div
              className={styles.rightEye}
              style={{ backgroundImage: `url(${redEye})` }}
            />

            <div
              className={styles.hat}
              style={{ backgroundImage: `url(${hat})` }}
            />

            <div
              className={styles.neck}
              style={{ backgroundImage: `url(${necklace})` }}
            />
          </div>
        </div>
      </>
    );
  };

  return content();
};
