import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = 'c:/p/modern-portfolio/src/assets';

const filesToCompress = [
  { name: 'about.png', output: 'about.webp', width: 800 },
  { name: 'profile.png', output: 'profile.webp', width: 800 },
  { name: 'project2.png', output: 'project2.webp', width: 800 },
  { name: 'vsCode.png', output: 'vsCode.webp', width: 1000 },
  { name: 'project03.png', output: 'project03.webp', width: 800 },
  { name: 'project1.png', output: 'project1.webp', width: 800 },
  { name: 'project3.png', output: 'project3.webp', width: 800 },
  { name: 'project01.png', output: 'project01.webp', width: 800 },
  { name: 'project02.png', output: 'project02.webp', width: 800 }
];

async function compress() {
  for (const item of filesToCompress) {
    const inputPath = path.join(assetsDir, item.name);
    const outputPath = path.join(assetsDir, item.output);

    if (fs.existsSync(inputPath)) {
      console.log(`Compressing ${item.name}...`);
      try {
        await sharp(inputPath)
          .resize({ width: item.width, withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(outputPath);
        console.log(`Saved to ${item.output}`);
      } catch (err) {
        console.error(`Error compressing ${item.name}:`, err);
      }
    } else {
      console.log(`File not found: ${item.name}`);
    }
  }
}

compress();
