import React from 'react';
import './ImageBuilder.scss';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

export const ImageBuilder = () => {
  const ref = React.useRef();

  const doCapture = () => {
    const options = {
      scale: 1,
    };

    html2canvas(ref.current, options).then((canvas) => {
      canvas.toBlob(
        function (blob) {
          console.log('saving');
          saveAs(blob, 'XXXXXXXXXXXXXXXXX.jpg');
        },
        'image/jpeg',
        0.5
      );
    });
  };

  const content = () => {
    return (
      <div ref={ref}>
        <button onClick={doCapture}>capture</button>
        <div id="capture">
          <div className="heroblack"> </div>
          <div className="hero"> </div>

          <div className="newversion">Version &nbsp; 10</div>

          <div className="content">
            <div className="header">
              <div className="icon"> </div>

              <div className="title">Introducing</div>
              <div className="product">Path Finder 10</div>
              <div className="subtitle">Advanced File Manager for Mac</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return content();
};
