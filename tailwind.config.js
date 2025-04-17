/**
 * Tailwind CSS Configuration
 * 
 * This file configures the Tailwind CSS framework,
 * including content paths, theme customization, and plugins.
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Define the files that Tailwind should scan for class names
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Theme customization options
  theme: {
    extend: {},
  },
  // List of Tailwind plugins to use
  plugins: [],
} 