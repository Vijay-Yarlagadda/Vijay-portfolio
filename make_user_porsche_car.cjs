const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');

const inputPath = path.join(__dirname, 'public/porsche_user_body.png');
const outputPath = path.join(__dirname, 'public/porsche_user_body_clean.png');

fs.createReadStream(inputPath)
  .pipe(new PNG({ filterType: 4 }))
  .on('parsed', function() {
    const width = this.width;
    const height = this.height;
    const flipped = new PNG({ width, height });

    // Flip horizontally & remove white background
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        // Source pixel (facing left)
        const srcIdx = (width * y + x) << 2;
        // Target pixel (flipped facing right)
        const targetX = width - 1 - x;
        const targetIdx = (width * y + targetX) << 2;

        const r = this.data[srcIdx];
        const g = this.data[srcIdx + 1];
        const b = this.data[srcIdx + 2];
        const a = this.data[srcIdx + 3];

        // Background is pure white/light (r>240, g>240, b>240)
        if (r > 230 && g > 230 && b > 230) {
          flipped.data[targetIdx + 3] = 0; // Transparent background
        } else {
          // Color shift: transform tan body (#c8b394) into a bright sleek silver-white body (#F0F4F8)
          const lightness = (r + g + b) / 3;
          flipped.data[targetIdx] = Math.min(255, lightness + 40);     // Red
          flipped.data[targetIdx + 1] = Math.min(255, lightness + 45); // Green
          flipped.data[targetIdx + 2] = Math.min(255, lightness + 50); // Blue
          flipped.data[targetIdx + 3] = a;                             // Alpha
        }
      }
    }

    flipped.pack().pipe(fs.createWriteStream(outputPath)).on('finish', () => {
      console.log('Successfully created flipped transparent user Porsche body at ' + outputPath);
    });
  });
