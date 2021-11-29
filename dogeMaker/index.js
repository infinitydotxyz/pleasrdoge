import { createWriteStream, readdirSync, mkdirSync } from 'fs';
import pkg from 'canvas';
import sizeOf from 'image-size';

const { createCanvas, loadImage } = pkg;

const saveFile = async ({ outPath, eyeImage, hatImage, glassesImage }) => {
  try {
    const source = './images/doge.png';
    const canvas = createCanvas(800, 800);
    const ctx = canvas.getContext('2d');

    let image = await loadImage(source);
    ctx.drawImage(image, 0, 0);

    // Stars on eyes
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

    // Hats
    if (hatImage) {
      const size = 400;
      const x = 220;
      const y = 20;

      image = await loadImage(hatImage);
      ctx.drawImage(image, x, y, size, size);
    }

    // Glasses
    if (glassesImage) {
      const dimensions = sizeOf(glassesImage);

      const scale = 0.82;
      const x = 220;
      const y = 300 - dimensions.height;

      image = await loadImage(glassesImage);
      ctx.drawImage(
        image,
        x,
        y,
        dimensions.width * scale,
        dimensions.height * scale
      );
    }

    canvas.createPNGStream().pipe(createWriteStream(outPath));
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

const filesInDir = (path) => {
  const list = readdirSync(path, { withFileTypes: true });

  return list.filter((entry) => {
    entry.path = `${path}/${entry.name}`;
    return entry.isFile;
  });
};

const main = () => {
  mkdirSync('./output', { recursive: true });

  const stars = filesInDir('./images/Stars');
  // const hats = filesInDir('./images/Hats');
  const glasses = filesInDir('./images/Glasses');

  // files object contains all files names
  // log them on console
  // hats.forEach((hatEntry) => {
  stars.forEach((entry) => {
    glasses.forEach((glassesEntry) => {
      saveFile({
        outPath: `./output/${entry.name + glassesEntry.name}`,
        eyeImage: entry.path,
        // hatImage: hatEntry.path,
        glassesImage: glassesEntry.path,
      });
    });
  });
  // });
};

main();
