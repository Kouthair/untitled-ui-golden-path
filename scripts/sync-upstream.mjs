/**
 * Sync Script: Downloads latest Untitled UI React and updates vendor/ui
 * Usage: npm run sync-ui
 */
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const VENDOR_DIR = path.join(__dirname, '../vendor/ui');
const REPO_URL = 'https://github.com/untitleduico/react.git';
const BRANCH = 'main';
const TEMP_DIR = path.join(__dirname, '../temp-ui-sync');

const FOLDERS_TO_SYNC = ['components', 'styles', 'hooks', 'utils'];

console.log('🔄 Starting Untitled UI sync...');

// Clean up previous temp dir if exists
if (fs.existsSync(TEMP_DIR)) fs.rmSync(TEMP_DIR, { recursive: true });

try {
  // 1. Clone latest to temp dir (shallow clone for speed)
  console.log(`⬇️ Downloading latest from ${BRANCH}...`);
  execSync(`git clone --depth 1 --branch ${BRANCH} ${REPO_URL} ${TEMP_DIR}`, { stdio: 'inherit' });

  // 2. Ensure vendor dir exists
  if (!fs.existsSync(VENDOR_DIR)) fs.mkdirSync(VENDOR_DIR, { recursive: true });

  // 3. Sync folders intelligently
  FOLDERS_TO_SYNC.forEach(folder => {
    const src = path.join(TEMP_DIR, folder);
    const dest = path.join(VENDOR_DIR, folder);
    
    if (!fs.existsSync(src)) return;
    
    console.log(`\n📦 Syncing ${folder}...`);
    
    if (!fs.existsSync(dest)) {
      // If folder doesn't exist locally, just copy it
      fs.cpSync(src, dest, { recursive: true });
      console.log(`   ✅ Copied new folder.`);
    } else {
      // If folder exists, merge files but SKIP modified files
      const files = fs.readdirSync(src, { recursive: true }).filter(f => fs.statSync(path.join(src, f)).isFile());
      
      let skipped = 0;
      let updated = 0;

      files.forEach(file => {
        const srcFile = path.join(src, file);
        const destFile = path.join(dest, file);
        
        if (!fs.existsSync(destFile)) {
          fs.mkdirSync(path.dirname(destFile), { recursive: true });
          fs.copyFileSync(srcFile, destFile);
          updated++;
        } else {
          // File exists locally. Check if we modified it.
          // Simple heuristic: if local file is different from a fresh clone, assume we customized it.
          const srcContent = fs.readFileSync(srcFile, 'utf8');
          const destContent = fs.readFileSync(destFile, 'utf8');
          
          if (srcContent === destContent) {
            // Unmodified, safe to update
            fs.copyFileSync(srcFile, destFile);
            updated++;
          } else {
            // Modified locally! Skip to prevent overwriting custom work.
            console.log(`   ⚠️ SKIPPED (Locally modified): ${file}`);
            skipped++;
          }
        }
      });
      console.log(`   ✅ Updated ${updated} files. Skipped ${skipped} customized files.`);
    }
  });

} catch (error) {
  console.error('❌ Sync failed:', error.message);
} finally {
  // Clean up temp dir
  if (fs.existsSync(TEMP_DIR)) fs.rmSync(TEMP_DIR, { recursive: true });
  console.log('\n🎉 Sync complete! Review any skipped files manually if needed.');
}