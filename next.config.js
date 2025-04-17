/**
 * Next.js Configuration
 * 
 * This file configures various aspects of the Next.js application,
 * including development settings, build options, and runtime behavior.
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React's Strict Mode for better development experience
  reactStrictMode: true,
  // Enable SWC minification for faster builds
  swcMinify: true,
  // Configure image domains
  images: {
    domains: ['via.placeholder.com'],
  },
}

module.exports = nextConfig 