import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const inputHex = process.argv[2];

if (!inputHex || !inputHex.match(/^#[0-9a-fA-F]{3,8}$/)) {
  console.error('❌ Error: Please provide a valid hex color.');
  console.error('Usage: npm run generate-colors #2563EB');
  process.exit(1);
}

// Pure JS Color Math (Zero Dependencies)
function hexToRgb(hex) {
  hex = hex.replace('#', '');
  if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
  const num = parseInt(hex, 16);
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
}

function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  if (max === min) { h = s = 0; } 
  else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return { h: h * 360, s: s * 100, l: l * 100 };
}

function hslToRgbString(h, s, l) {
  s /= 100; l /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color);
  };
  const r = f(0), g = f(8), b = f(4);
  return `rgb(${r} ${g} ${b})`; // Tailwind v4 format
}

const baseColor = hexToRgb(inputHex);
const baseHsl = rgbToHsl(baseColor.r, baseColor.g, baseColor.b);

// Define how much to shift the lightness for each step
const scaleSteps = [
  { step: 25, amount: 92 },   // Lightest tint
  { step: 50, amount: 85 },
  { step: 100, amount: 75 },
  { step: 200, amount: 55 },
  { step: 300, amount: 30 },
  { step: 400, amount: 15 },
  { step: 500, amount: 0 },    // Base
  { step: 600, amount: -15 },   // Darker shades
  { step: 700, amount: -25 },
  { step: 800, amount: -35 },
  { step: 900, amount: -45 },
  { step: 950, amount: -55 },   // Darkest shade
];

let outputString = `/* AUTO-GENERATED BRAND COLORS - Base: ${inputHex} */\n:root {\n`;

scaleSteps.forEach(({ step, amount }) => {
  let newL = baseHsl.l + amount;
  if (newL > 100) newL = 100;
  if (newL < 0) newL = 0;
  
  const rgbString = hslToRgbString(baseHsl.h, baseHsl.s, newL);
  outputString += `  --color-brand-${step}: ${rgbString};\n`;
});

outputString += `}\n`;

// Write to theme-overrides.css
const overridePath = path.resolve(__dirname, '../src/styles/theme-overrides.css');

if (!fs.existsSync(overridePath)) {
  fs.writeFileSync(overridePath, `/* Client Theme Overrides */\n`);
}

fs.appendFileSync(overridePath, outputString);

console.log(`✅ Success! Generated brand scale for ${inputHex}`);
console.log(`📝 Colors appended to src/styles/theme-overrides.css`);