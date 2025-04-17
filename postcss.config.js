/**
 * PostCSS Configuration
 * 
 * This file configures PostCSS, which processes CSS with JavaScript plugins.
 * It's primarily used here to integrate Tailwind CSS and Autoprefixer.
 */

module.exports = {
  // List of PostCSS plugins to use
  plugins: {
    // Process Tailwind CSS directives
    tailwindcss: {},
    // Add vendor prefixes to CSS rules
    autoprefixer: {},
  },
} 