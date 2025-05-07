/**
 * Pre-build check script to identify and fix common issues
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Running pre-build checks...');

try {
  // Check for Node.js version compatibility
  const nodeVersion = process.versions.node;
  const major = parseInt(nodeVersion.split('.')[0], 10);
  
  if (major < 16) {
    console.warn(`⚠️ Warning: You're using Node.js ${nodeVersion}. Astro recommends Node.js 16 or higher.`);
  } else {
    console.log(`✓ Node.js version ${nodeVersion} is compatible.`);
  }
  
  // Check for presence of required files
  const requiredFiles = [
    'astro.config.mjs',
    'src/pages/index.astro',
    'public/perfume-icon.svg'
  ];
  
  let filesOk = true;
  
  for (const file of requiredFiles) {
    if (!fs.existsSync(path.resolve(process.cwd(), file))) {
      console.error(`❌ Missing required file: ${file}`);
      filesOk = false;
    }
  }
  
  if (filesOk) {
    console.log('✓ All required files present.');
  }
  
  // Check package.json for compatibility issues
  const packageJson = require('./package.json');
  const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
  
  const reactVersion = dependencies['react'];
  const reactDomVersion = dependencies['react-dom'];
  
  if (reactVersion && reactDomVersion) {
    // Remove any prefix characters like ^ or ~
    const cleanReactVersion = reactVersion.replace(/[\^~]/, '');
    const cleanReactDomVersion = reactDomVersion.replace(/[\^~]/, '');
    
    const majorReact = parseInt(cleanReactVersion.split('.')[0], 10);
    const majorReactDom = parseInt(cleanReactDomVersion.split('.')[0], 10);
    
    if (majorReact !== majorReactDom) {
      console.warn(`⚠️ Warning: React (${reactVersion}) and React DOM (${reactDomVersion}) versions should match.`);
    } else {
      console.log(`✓ React dependencies look good.`);
    }
  }
  
  console.log('Pre-build checks completed.');
  console.log('You can now run the build with: npm run build');
  
} catch (error) {
  console.error('Error during pre-build checks:', error);
  process.exit(1);
} 