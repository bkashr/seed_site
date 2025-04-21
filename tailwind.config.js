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
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Theme customization options
  theme: {
    extend: {
      colors: {
        'game-primary': '#6B4EFF',
        'game-secondary': '#FF6B4E',
        'game-accent': '#4EFF6B',
        'game-dark': '#1A1A2E',
        'game-light': '#F0F0F0',
        'minecraft': '#7CFC00',
        'terraria': '#FF6B4E',
        'balatro': '#6B4EFF',
        synth: {
          primary: '#FF6AD5', // Hot pink
          secondary: '#C774E8', // Purple
          accent: '#AD8CFF', // Lavender
          dark: '#0F0F1A', // Deep navy
          light: '#F0F0FF', // Soft white
          neon: '#00F0FF', // Cyan
          sunset: '#FF9E64', // Orange
          midnight: '#1A1A2E', // Darker navy
        },
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'cursive'],
        'arcade': ['"VT323"', 'monospace'],
        'sci-fi': ['"Orbitron"', 'sans-serif'],
      },
      backgroundImage: {
        'pixel-pattern': "url('/images/backgrounds/pixel-pattern.png')",
        'minecraft-dirt': "url('/images/backgrounds/minecraft-dirt.png')",
        'terraria-stone': "url('/images/backgrounds/terraria-stone.png')",
        'balatro-cards': "url('/images/backgrounds/balatro-cards.png')",
        'synth-gradient': 'linear-gradient(135deg, #FF6AD5 0%, #C774E8 50%, #AD8CFF 100%)',
        'synth-grid': 'url("/images/backgrounds/synth-grid.png")',
        'synth-scanlines': 'url("/images/backgrounds/scanlines.png")',
      },
      boxShadow: {
        'synth-glow': '0 0 15px rgba(255, 106, 213, 0.5)',
        'synth-glow-lg': '0 0 30px rgba(255, 106, 213, 0.7)',
      },
      animation: {
        'synth-pulse': 'synth-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'synth-float': 'synth-float 6s ease-in-out infinite',
      },
      keyframes: {
        'synth-pulse': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        'synth-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  // List of Tailwind plugins to use
  plugins: [],
} 