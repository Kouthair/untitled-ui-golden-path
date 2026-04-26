import { Colord, colord } from 'colord';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Color scale mapping (Tailwind-like)
// Values represent the target lightness (0-100)
const COLOR_SCALE = {
  25: 98,   // Very light
  50: 95,   // Light
  100: 90,  // Lighter
  200: 82,  // Light medium
  300: 74,  // Medium light
  400: 66,  // Medium
  500: 0,   // Base color (use original)
  600: 45,  // Slightly dark
  700: 39,  // Dark
  800: 33,  // Darker
  900: 27,  // Very dark
  950: 21   // Ultra dark
};

function generateBrandScale(baseHex) {
  const baseColor = colord(baseHex);

  if (!baseColor.isValid()) {
    console.error(`❌ Invalid hex color: ${baseHex}`);
    process.exit(1);
  }

  console.log(`🎨 Generating brand scale from: ${baseHex.toUpperCase()}`);

  const scale = {};
  const baseHsl = baseColor.toHsl();

  Object.entries(COLOR_SCALE).forEach(([step, targetLightness]) => {
    let color;

    if (step === '500') {
      color = baseColor;
    } else {
      // Create new color with same hue/saturation but target lightness
      color = colord({
        h: baseHsl.h,
        s: baseHsl.s,
        l: targetLightness
      });
    }

    scale[step] = color.toRgb();
  });

  return scale;
}

function formatAsCSSVariables(scale) {
  const lines = [];

  lines.push('/* Brand Color Scale - Auto-generated */');
  lines.push(':root {');

  Object.entries(scale).forEach(([step, rgb]) => {
    const rgbString = `${rgb.r} ${rgb.g} ${rgb.b}`;
    lines.push(`  --color-brand-${step}: ${rgbString};`);
  });

  lines.push('}');
  lines.push('');
  lines.push('/* Dark mode overrides */');
  lines.push('.dark-mode {');

  // For dark mode, we might want to adjust some colors
  // For now, keep them the same but this could be enhanced
  Object.entries(scale).forEach(([step, rgb]) => {
    const rgbString = `${rgb.r} ${rgb.g} ${rgb.b}`;
    lines.push(`  --color-brand-${step}: ${rgbString};`);
  });

  lines.push('}');

  return lines.join('\n');
}

function main() {
  const args = process.argv.slice(2);

  if (args.length !== 1) {
    console.log('Usage: node scripts/generate-overrides.js #HEX_COLOR');
    console.log('Example: node scripts/generate-overrides.js #7F56D9');
    process.exit(1);
  }

  const baseHex = args[0];
  const scale = generateBrandScale(baseHex);
  const cssContent = formatAsCSSVariables(scale);

  const outputPath = path.resolve(__dirname, '../src/styles/theme-overrides.css');

  // Check if file exists and has existing content
  let existingContent = '';
  if (fs.existsSync(outputPath)) {
    existingContent = fs.readFileSync(outputPath, 'utf8');
    // Remove existing brand color definitions
    existingContent = existingContent.replace(/\/\* Brand Color Scale - Auto-generated \*\/[\s\S]*?\*\//g, '');
    existingContent = existingContent.replace(/:root\s*\{[\s\S]*?\}/g, '');
    existingContent = existingContent.replace(/\.dark-mode\s*\{[\s\S]*?\}/g, '');
    existingContent = existingContent.trim();
  }

  // Combine existing content with new brand colors
  const finalContent = cssContent + (existingContent ? '\n\n' + existingContent : '');

  fs.writeFileSync(outputPath, finalContent);

  console.log(`✅ Brand scale generated and saved to: src/styles/theme-overrides.css`);
  console.log(`🎯 Your brand colors are now available as bg-brand-500, text-brand-600, etc.`);
}

main();