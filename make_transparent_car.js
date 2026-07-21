const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');

const inputPath = path.join(__dirname, 'public/porsche_gt3rs_side.png');
const outputPath = path.join(__dirname, 'public/porsche_gt3rs_transparent.png');

fs.createReadStream(inputPath)
  .pipe(new PNG({ filterType: 4 }))
  .on('parsed', function() {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const idx = (this.width * y + x) << 2;

        const r = this.data[idx];
        const g = this.data[idx + 1];
        const b = this.data[idx + 2];

        // Smooth opacity falloff for dark background
        const brightness = (r + g + b) / 3;
        if (brightness < 40) {
          this.data[idx + 3] = Math.max(0, Math.floor((brightness / 40) * 255));
        }
      }
    }

    this.pack().pipe(fs.createWriteStream(outputPath)).on('finish', () => {
      console.log('Successfully created 100% transparent Porsche PNG at ' + outputPath);
    });
  });
