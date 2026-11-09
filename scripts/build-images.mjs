// Rebuild responsive portrait sizes from the approved Sumit portrait already
// stored in public/assets. The social preview is maintained separately so
// running this script does not overwrite the supplied QA banner artwork.
import sharp from 'sharp';
import { mkdirSync, accessSync, constants } from 'node:fs';

const OUT = 'public/assets';
const SOURCE = `${OUT}/Sumit portrait-1100.webp`;
mkdirSync(OUT, { recursive: true });

try {
  accessSync(SOURCE, constants.R_OK);
} catch {
  throw new Error(`Missing portrait source: ${SOURCE}. Add the approved Sumit portrait before running npm run images.`);
}

for (const width of [1100, 720, 420]) {
  await sharp(SOURCE)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 86, alphaQuality: 90 })
    .toFile(`${OUT}/portrait-${width}.webp`);
}

console.log('Responsive Sumit portrait assets rebuilt. Existing QA social preview retained.');
