/**
 * Script to analyze the dist folder for optimization opportunities
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const DIST_DIR = path.join(__dirname, 'dist');
const MAX_FILE_SIZE_WARNING = 200 * 1024; // 200KB
const MAX_IMAGE_SIZE_WARNING = 500 * 1024; // 500KB

console.log('Analyzing dist folder for optimization opportunities...');

// Collect file sizes and stats
const stats = {
  totalSize: 0,
  largeFiles: [],
  largeImages: [],
  htmlCount: 0,
  jsCount: 0,
  cssCount: 0,
  imageCount: 0,
  otherCount: 0
};

/**
 * Recursively scans directory and analyzes files
 */
function scanDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      scanDirectory(filePath);
      continue;
    }
    
    // Get file extension
    const ext = path.extname(file).toLowerCase();
    
    // Update stats
    stats.totalSize += stat.size;
    
    // Categorize file
    if (ext === '.html') {
      stats.htmlCount++;
    } else if (ext === '.js') {
      stats.jsCount++;
      if (stat.size > MAX_FILE_SIZE_WARNING) {
        stats.largeFiles.push({
          path: path.relative(DIST_DIR, filePath),
          size: (stat.size / 1024).toFixed(2) + ' KB'
        });
      }
    } else if (ext === '.css') {
      stats.cssCount++;
    } else if (['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'].includes(ext)) {
      stats.imageCount++;
      if (stat.size > MAX_IMAGE_SIZE_WARNING) {
        stats.largeImages.push({
          path: path.relative(DIST_DIR, filePath),
          size: (stat.size / 1024).toFixed(2) + ' KB'
        });
      }
    } else {
      stats.otherCount++;
    }
  }
}

try {
  if (!fs.existsSync(DIST_DIR)) {
    console.error(`Error: Dist directory not found at ${DIST_DIR}`);
    process.exit(1);
  }
  
  // Run the scan
  scanDirectory(DIST_DIR);
  
  // Report results
  console.log('\n=== Build Output Analysis ===');
  console.log(`Total size: ${(stats.totalSize / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`HTML files: ${stats.htmlCount}`);
  console.log(`JavaScript files: ${stats.jsCount}`);
  console.log(`CSS files: ${stats.cssCount}`);
  console.log(`Image files: ${stats.imageCount}`);
  console.log(`Other files: ${stats.otherCount}`);
  
  // Show large files
  if (stats.largeFiles.length > 0) {
    console.log('\n=== Large JavaScript Files ===');
    stats.largeFiles.forEach(file => {
      console.log(`${file.path} (${file.size})`);
    });
    console.log('\nConsider code splitting for large JavaScript files to improve initial load time.');
  }
  
  // Show large images
  if (stats.largeImages.length > 0) {
    console.log('\n=== Large Image Files ===');
    stats.largeImages.forEach(file => {
      console.log(`${file.path} (${file.size})`);
    });
    console.log('\nConsider optimizing these images to improve page load performance.');
  }
  
  console.log('\nAnalysis complete!');
} catch (error) {
  console.error('Error analyzing build output:', error);
  process.exit(1);
} 