import { createWriteStream, readdir, mkdir } from 'fs';
import pkg from 'canvas';

const { createCanvas, loadImage } = pkg;

const saveFile = async (outPath, eyeImage) => {
  try {
    const source = './images/doge.png';
    const canvas = createCanvas(800, 800);
    const ctx = canvas.getContext('2d');

    let image = await loadImage(source);
    ctx.drawImage(image, 0, 0);

    if (eyeImage) {
      const size = 120;
      const lx = 240;
      const ly = 220;
      const rx = 375;
      const ry = 250;

      image = await loadImage(eyeImage);
      ctx.drawImage(image, lx, ly, size, size);

      ctx.drawImage(image, rx, ry, size, size);
    }

    canvas.createPNGStream().pipe(createWriteStream(outPath));
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

const main = () => {
  mkdir('./output', { recursive: true }, (err) => {
    console.log(err);
  });

  const path = './images/Stars';

  readdir(path, { withFileTypes: true }, (err, entries) => {
    if (err) {
      throw err;
    }

    // files object contains all files names
    // log them on console
    entries.forEach((entry) => {
      if (entry.isFile) {
        saveFile(`./output/${entry.name}.png`, `${path}/${entry.name}`);
      } else {
        // sdf
      }
      console.log(entry);
    });
  });

  // saveFile('./output/test.png', './images/Stars/Orange.png');
  // mkdir('./output/fuck', { recursive: true }, (err) => {
  //   console.log(err);
  // });
  // saveFile('./output/fuck/test.png');
};

main();
