// vercel-build.js
const { execSync } = require('child_process');

console.log('Installing dependencies...');
execSync('npm install', { stdio: 'inherit' });

console.log('Running build script...');
execSync('npm run build', { stdio: 'inherit' });

console.log('Build completed successfully!');
