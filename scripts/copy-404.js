const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const src = path.join(root, 'public', '404.html');
const destDir = path.join(root, 'build');
const dest = path.join(destDir, '404.html');

try {
  if (!fs.existsSync(destDir)) {
    console.error('Build directory not found, please run `npm run build` first.');
    process.exit(1);
  }

  fs.copyFileSync(src, dest);
  console.log('Copied public/404.html to build/404.html');
} catch (err) {
  console.error('Failed to copy 404.html:', err);
  process.exit(1);
}
