import { createWriteStream, readdirSync, mkdirSync } from 'fs';
import pkg from 'canvas';
const { createCanvas, loadImage } = pkg;

const imgCache = {};

const loadImg = async (path) => {
  let result = imgCache[path];

  if (!result) {
    result = await loadImage(path);

    imgCache[path] = result;
  }

  return result;
};

let cnt = 0;

const saveFile = async (props) => {
  const {
    dogeImage,
    outputPath,
    starImage,
    heartImage,
    hatImage,
    glassesImage,
    bowTieImage,
  } = props;

  if (glassesImage) {
    if (starImage || heartImage) {
      return;
    }
  } else {
    if (starImage && heartImage) {
      return;
    }
  }

  cnt++;

  try {
    let image;
    let canvas = createCanvas(800, 800);
    let ctx = canvas.getContext('2d');

    ctx.drawImage(dogeImage, 0, 0);

    // Stars on eyes
    if (starImage) {
      const size = 120;
      const lx = 240;
      const ly = 220;
      const rx = 375;
      const ry = 250;

      image = await loadImg(starImage);
      ctx.drawImage(image, lx, ly, size, size);

      ctx.drawImage(image, rx, ry, size, size);
    }

    // Stars on eyes
    if (heartImage) {
      const size = 120;
      const lx = 240;
      const ly = 220;
      const rx = 375;
      const ry = 250;

      image = await loadImg(heartImage);
      ctx.drawImage(image, lx, ly, size, size);

      ctx.drawImage(image, rx, ry, size, size);
    }

    // Hats
    if (hatImage) {
      const scale = 0.82;
      const x = 130;
      const y = 10;

      image = await loadImg(hatImage);
      ctx.drawImage(image, x, y, image.width * scale, image.height * scale);
    }

    // Glasses
    if (glassesImage) {
      const scale = 0.82;
      const x = 220;
      const y = 300;

      image = await loadImg(glassesImage);

      ctx.drawImage(image, x, y, image.width * scale, image.height * scale);
    }

    // Bow Ties
    if (bowTieImage) {
      const scale = 0.32;
      const x = 220;
      const y = 500;

      image = await loadImg(bowTieImage);
      ctx.drawImage(image, x, y, image.width * scale, image.height * scale);
    }

    canvas.createPNGStream().pipe(createWriteStream(outputPath));

    canvas = null;
    image = null;
    ctx = null;
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

const filesInDir = (path, listCode) => {
  let list = readdirSync(path, { withFileTypes: true });

  list = list.filter((entry) => {
    return entry.isFile;
  });

  list.forEach((entry, index) => {
    entry.path = `${path}/${entry.name}`;
    entry.id = `${listCode}${index}`;
  });

  return list;
};

const pathForEntries = (entries) => {
  let result = '';

  for (const e of entries) {
    if (e.id) {
      result = `${result}_${e.id}`;
    }
  }

  return result;
};

const main = async () => {
  mkdirSync('./output', { recursive: true });

  const stars = filesInDir('./images/Stars', 's');
  const hats = filesInDir('./images/Hats', 'h');
  const glasses = filesInDir('./images/Glasses', 'g');
  const bowTies = filesInDir('./images/Bow ties', 'b');
  const hearts = filesInDir('./images/Hearts', 'r');

  // push blank on each list so we can have items without any hat/glasses/stars
  stars.push({});
  hats.push({});
  glasses.push({});
  bowTies.push({});
  hearts.push({});

  let max = 100000;

  const dogeImage = await loadImg('./images/doge.png');

  // files object contains all files names
  // log them on console
  for (const hatEntry of hats) {
    for (const starEntry of stars) {
      for (const glassesEntry of glasses) {
        console.log(cnt);

        for (const tiesEntry of bowTies) {
          for (const heartEntry of hearts) {
            const path = pathForEntries([
              starEntry,
              glassesEntry,
              hatEntry,
              tiesEntry,
              heartEntry,
            ]);

            if (--max > 0) {
              await saveFile({
                dogeImage: dogeImage,
                outputPath: `./output/${path}.png`,
                starImage: starEntry.path,
                heartImage: heartEntry.path,
                hatImage: hatEntry.path,
                glassesImage: glassesEntry.path,
                bowTieImage: tiesEntry.path,
              });
            }
          }
        }
      }
    }
  }

  console.log(`Total Images: ${cnt}`);
};

main();
