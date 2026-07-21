const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');

const inputPath = path.join(__dirname, 'public/porsche_user_body_beige.png');
const outputPath = path.join(__dirname, 'public/porsche_final_complete.png');

fs.createReadStream(inputPath)
  .pipe(new PNG({ filterType: 4 }))
  .on('parsed', function() {
    const width = this.width;
    const height = this.height;

    // Create a composite PNG canvas
    const finalPng = new PNG({ width, height });

    // Wheel centers and radius in original image coordinates
    const rearX = 225;
    const rearY = 228;
    const frontX = 790;
    const frontY = 228;
    const radius = 56;
    const innerRadius = 45;

    // 1. Draw Wheels directly onto finalPng
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const idx = (width * y + x) << 2;

        const distRear = Math.hypot(x - rearX, y - rearY);
        const distFront = Math.hypot(x - frontX, y - frontY);

        let isWheelPixel = false;
        let r = 0, g = 0, b = 0, a = 0;

        const checkDist = (dist, cx, cy) => {
          if (dist <= radius) {
            isWheelPixel = true;
            if (dist > innerRadius) {
              // Dark Rubber Tyre
              r = 20; g = 20; b = 20; a = 255;
            } else if (dist > innerRadius - 6) {
              // Silver Rim Outer Ring
              r = 210; g = 210; b = 210; a = 255;
            } else {
              // Rim Interior & Spokes & Red Caliper
              const angle = Math.atan2(y - cy, x - cx);
              const numSpokes = 10;
              const spokeMatch = Math.cos(angle * numSpokes);

              // Red Caliper in upper area
              if (y < cy - 10 && dist > 15 && dist < 38 && Math.abs(x - cx) < 30) {
                r = 213; g = 0; b = 30; a = 255;
              } else if (spokeMatch > 0.7 || dist < 10) {
                // Silver Spokes & Hub
                r = 220; g = 220; b = 220; a = 255;
              } else {
                // Dark background inside rim
                r = 15; g = 15; b = 15; a = 255;
              }
            }
          }
        };

        checkDist(distRear, rearX, rearY);
        checkDist(distFront, frontX, frontY);

        if (isWheelPixel) {
          finalPng.data[idx] = r;
          finalPng.data[idx + 1] = g;
          finalPng.data[idx + 2] = b;
          finalPng.data[idx + 3] = a;
        } else {
          finalPng.data[idx + 3] = 0; // Transparent
        }
      }
    }

    // 2. Composite the Beige Body Cutout ON TOP of the Wheels
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const idx = (width * y + x) << 2;
        const bodyAlpha = this.data[idx + 3];

        if (bodyAlpha > 30) {
          finalPng.data[idx] = this.data[idx];
          finalPng.data[idx + 1] = this.data[idx + 1];
          finalPng.data[idx + 2] = this.data[idx + 2];
          finalPng.data[idx + 3] = bodyAlpha;
        }
      }
    }

    finalPng.pack().pipe(fs.createWriteStream(outputPath)).on('finish', () => {
      console.log('Successfully baked wheels into Porsche body PNG at ' + outputPath);
    });
  });
