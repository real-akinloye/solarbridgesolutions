#!/usr/bin/env node
// Export PNG from the SVG wordmark using sharp
// Usage: node scripts/export-logo-png.cjs [width] [height]

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function main() {
  const width = Number(process.argv[2] || 800);
  const height = Number(process.argv[3] || 240);

  const root = path.resolve(__dirname, '..');
  const inputSvg = path.join(root, 'public', 'assets', 'solarbridge-wordmark.svg');
  const outPng = path.join(root, 'public', 'assets', 'solarbridge-solution.png');

  if (!fs.existsSync(inputSvg)) {
    console.error('Missing SVG at', inputSvg);
    process.exit(1);
  }

  try {
    const svgBuffer = fs.readFileSync(inputSvg);
    await sharp(svgBuffer, { density: 300 })
      .resize(width, height, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ quality: 100 })
      .toFile(outPng);

    console.log('Wrote', path.relative(process.cwd(), outPng));
  } catch (err) {
    console.error('Failed exporting PNG:', err);
    process.exit(1);
  }
}

main();





