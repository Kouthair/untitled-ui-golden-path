import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'node:url';

// Define __dirname for ES Modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 🚨 THE DRIFT RULES (Matches exactly what we banned in CLAUDE.md and ESLint)
const DRIFT_PATTERNS = [
  {
    name: "🚨 RAW HEX IN ARBITRARY VALUE",
    regex: /className=["'`][^"'`]*\[#([0-9a-fA-F]{3,8})\]/g,
    hint: "Use semantic Tailwind classes (e.g., bg-primary) instead of arbitrary hexes."
  },
  {
    name: "🚨 DARK MODE PREFIX (dark:)",
    regex: /dark:\w/g,
    hint: "Dark mode is handled by CSS variables flipping under .dark-mode. Do not use dark: prefixes."
  },
  {
    name: "🚨 ARBITRARY TEXT SIZE (px/rem)",
    regex: /text-\[\d+(\.\d+)?(px|rem)\]/g,
    hint: "Use the strict type scale (e.g., text-xs, text-sm, text-md)."
  },
  {
    name: "🚨 RAW HEX IN INLINE STYLES",
    regex: /style=["'`][^"'`]*#[0-9a-fA-F]{3,8}/g,
    hint: "Avoid inline styles with raw hex codes. Use Tailwind classes."
  }
];

const TARGET_DIR = path.resolve(__dirname, '../src');
let totalDrifts = 0;

console.log(`🔍 Scanning ${TARGET_DIR} for design drift...\n`);

function scanFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  let fileDrifts = 0;

  DRIFT_PATTERNS.forEach(pattern => {
    // Reset regex state for each file
    pattern.regex.lastIndex = 0; 
    
    lines.forEach((line, index) => {
      if (pattern.regex.test(line)) {
        fileDrifts++;
        console.log(`[${pattern.name}]`);
        console.log(`File: ${path.relative(process.cwd(), filePath)}`);
        console.log(`Line: ${index + 1}`);
        console.log(`Code: ${line.trim()}`);
        console.log(`Hint: ${pattern.hint}\n`);
        pattern.regex.lastIndex = 0; // Reset again after match
      }
    });
  });

  return fileDrifts;
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    // Skip node_modules and vendor folders just in case
    if (stat.isDirectory()) {
      if (file === 'node_modules' || file === 'vendor') return;
      walkDir(filePath);
    } else if (/\.(tsx?|jsx?)$/.test(file)) {
      totalDrifts += scanFile(filePath);
    }
  });
}

// Run the scanner
walkDir(TARGET_DIR);

if (totalDrifts === 0) {
  console.log("✅ SUCCESS: Zero design drift detected. Codebase is clean.");
  process.exit(0);
} else {
  console.log(`❌ FAILED: Found ${totalDrifts} instances of design drift. Please fix them before committing.`);
  process.exit(1); // Exit with error code so CI/CD fails
}