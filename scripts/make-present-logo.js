#!/usr/bin/env node
/**
 * make-present-logo.js
 *
 * Resize and mask an existing logo to 128x56 with transparent background and rounded corners.
 * Usage: node scripts/make-present-logo.js
 * Requires: sharp (npm i sharp)
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const workspaceRoot = path.resolve(__dirname, '..');
const assetsDir = path.join(workspaceRoot, 'src', 'assets');
const candidates = [
  path.join(assetsDir, 'logo-transparent.png'),
  path.join(assetsDir, 'logo-main.png'),
  path.join(assetsDir, 'logo.png'),
];

const input = candidates.find((p) => fs.existsSync(p));
if (!input) {
  console.error('No source logo found. Place a logo at src/assets/logo-transparent.png or logo-main.png');
  process.exit(1);
}

const output = path.join(assetsDir, 'logo-present.png');
const WIDTH = 128;
const HEIGHT = 56;
const RADIUS = 8; // rounded corner radius

async function make() {
  try {
    // Create an SVG rounded rect mask
    const svg = `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="${WIDTH}" height="${HEIGHT}" rx="${RADIUS}" ry="${RADIUS}" fill="#fff"/></svg>`;

    // Resize the logo to fit within the box while preserving aspect ratio
    const resized = await sharp(input)
      .resize(WIDTH, HEIGHT, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();

    // Apply the rounded mask to create rounded corners
    await sharp(resized)
      .composite([{ input: Buffer.from(svg), blend: 'dest-in' }])
      .png({ quality: 100 })
      .toFile(output);

    console.log(`Created ${path.relative(process.cwd(), output)} from ${path.relative(process.cwd(), input)}`);
  } catch (err) {
    console.error('Error creating present logo:', err);
    process.exitCode = 1;
  }
}

make();
