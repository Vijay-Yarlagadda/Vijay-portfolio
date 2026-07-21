const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');

const inputPath = path.join(__dirname, 'public/porsche_user_body.png');
const outputPath = path.join(__dirname, 'public/porsche_user_body_beige.png');

fs.createReadStream(inputPath)
  .pipe(new PNG({ filterType: 4 }))
  .on('parsed', function() {
    const width = this.width;
    const height = this.height;
    const flipped = new PNG({ width, height });

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const srcIdx = (width * y + x) << 2;
        const targetX = width - 1 - x;
        const targetIdx = (width * y + targetX) << 2;

        const r = this.data[srcIdx];
        const g = this.data[srcIdx + 1];
        const b = this.data[srcIdx + 2];
        const a = this.data[srcIdx + 3];

        // Background is pure white (r > 230 && g > 230 && b > 230)
        if (r > 220 && g > 220 && b > 220) {
          flipped.data[targetIdx] = 0;
          flipped.data[targetIdx + 1] = 0;
          flipped.data[targetIdx + 2] = 0;
          flipped.data[targetIdx + 3] = 0; // Transparent
        } else {
          // Keep ORIGINAL beige / tan color!
          flipped.data[targetIdx] = r;
          flipped.data[targetIdx + 1] = g;
          flipped.data[targetIdx + 2] = b;
          flipped.data[targetIdx + 3] = a;
        }
      }
    }

    flipped.pack().pipe(fs.createWriteStream(outputPath)).on('finish', () => {
      console.log('Successfully created clean beige transparent Porsche PNG at ' + outputPath);
    });
  });
