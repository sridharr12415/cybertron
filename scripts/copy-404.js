const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const src = path.join(root, 'public', '404.html');
const destDir = path.join(root, 'build');
const dest = path.join(destDir, '404.html');
const indexPath = path.join(destDir, 'index.html');

// Runtime config loader script
const runtimeConfigScript = `
    <!-- Runtime config loader (allows changing API_BASE without rebuilding) -->
    <script>
      (function() {
        try {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', '/runtime-config.json', false);
          xhr.send(null);
          if (xhr.status === 200) {
            window.__RUNTIME__ = JSON.parse(xhr.responseText);
            console.log('🔧 Runtime config loaded', window.__RUNTIME__);
          } else {
            window.__RUNTIME__ = {};
          }
        } catch (e) {
          window.__RUNTIME__ = {};
        }
      })();
    </script>`;

try {
  if (!fs.existsSync(destDir)) {
    console.error('Build directory not found, please run `npm run build` first.');
    process.exit(1);
  }

  // Copy 404.html
  fs.copyFileSync(src, dest);
  console.log('Copied public/404.html to build/404.html');

  // Inject runtime config loader into index.html
  try {
    let indexContent = fs.readFileSync(indexPath, 'utf8');
    
    // Only inject if not already present
    if (!indexContent.includes('window.__RUNTIME__')) {
      // Insert the script before the closing </head> tag
      indexContent = indexContent.replace('</head>', runtimeConfigScript + '</head>');
      fs.writeFileSync(indexPath, indexContent, 'utf8');
      console.log('✅ Injected runtime config loader into index.html');
    } else {
      console.log('⏭️  Runtime config loader already present in index.html');
    }
  } catch (err) {
    console.error('Failed to inject runtime config into index.html:', err);
    process.exit(1);
  }
} catch (err) {
  console.error('Failed to copy 404.html:', err);
  process.exit(1);
}
