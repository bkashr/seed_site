/**
 * Hero Component
 * 
 * This component displays the main hero section of the website,
 * including the site description and featured seed of the day.
 */

import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side - Site Description */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find the Perfect Game Seed
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Discover and share seeds for your favorite games. 
              Whether you're speedrunning, building, or exploring,
              find the perfect seed to enhance your gameplay.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="/games"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                Browse Games
              </Link>
              <Link 
                href="/about"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right side - Seed of the Day */}
          <div className="md:w-1/2 md:pl-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <span className="text-sm font-medium text-blue-200">Seed of the Day</span>
                <span className="mx-2 text-blue-300">•</span>
                <span className="text-sm text-blue-200">Minecraft</span>
              </div>
              
              <h2 className="text-2xl font-bold mb-2">Speedrun Paradise</h2>
              <p className="text-blue-100 mb-4">
                Stronghold at spawn, nether fortress nearby, perfect for speedruns
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-blue-200">Seed: <span className="font-mono">123456789</span></span>
                <span className="text-sm text-blue-200">v1.20.4</span>
              </div>

              <Link 
                href="/games/minecraft/seeds/1"
                className="block w-full bg-white text-blue-600 text-center py-2 px-4 rounded hover:bg-blue-50 transition-colors"
              >
                View Seed
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 