/**
 * Minecraft Seeds Page
 * 
 * This page displays a collection of Minecraft seeds
 * with their descriptions and features.
 */

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Sample Minecraft seeds data
const minecraftSeeds = [
  {
    id: 1,
    seed: '123456789',
    title: 'Speedrun Paradise',
    description: 'Perfect for speedrunners - stronghold at spawn, nether fortress nearby, and village with blacksmith.',
    features: [
      'Stronghold at spawn',
      'Nether fortress within 200 blocks',
      'Village with blacksmith',
      'Desert temple nearby'
    ],
    imageUrl: 'https://via.placeholder.com/400x300?text=Minecraft+Speedrun',
    version: '1.20.4',
    rating: 4.8,
    Saves: 1250
  },
  {
    id: 2,
    seed: '987654321',
    title: 'Builder\'s Dream',
    description: 'Large flat plains biome with nearby mountains and ocean for the perfect building location.',
    features: [
      'Large flat plains biome',
      'Mountain range nearby',
      'Ocean access',
      'Multiple villages in area'
    ],
    imageUrl: 'https://via.placeholder.com/400x300?text=Minecraft+Builder',
    version: '1.20.4',
    rating: 4.5,
    Saves: 850
  },
  {
    id: 3,
    seed: '456789123',
    title: 'Survival Island',
    description: 'Start on a small island with all necessary resources nearby, perfect for a survival challenge.',
    features: [
      'Small starting island',
      'Ocean monument nearby',
      'Shipwreck with treasure',
      'Coral reef access'
    ],
    imageUrl: 'https://via.placeholder.com/400x300?text=Minecraft+Island',
    version: '1.20.4',
    rating: 4.7,
    Saves: 950
  },
  {
    id: 4,
    seed: '789123456',
    title: 'Mega Biome Mix',
    description: 'Experience multiple biomes in close proximity, including jungle, desert, and savanna.',
    features: [
      'Jungle temple',
      'Desert village',
      'Savanna with exposed mineshaft',
      'Multiple biomes within 500 blocks'
    ],
    imageUrl: 'https://via.placeholder.com/400x300?text=Minecraft+Biomes',
    version: '1.20.4',
    rating: 4.6,
    Saves: 750
  }
]

export default function MinecraftSeeds() {
  // State for favorites
  const [favorites, setFavorites] = useState<number[]>([])
  const [showFavorites, setShowFavorites] = useState(false)

  // Toggle favorite status
  const toggleFavorite = (seedId: number) => {
    setFavorites(prev => 
      prev.includes(seedId)
        ? prev.filter(id => id !== seedId)
        : [...prev, seedId]
    )
  }

  // Filter seeds based on favorites toggle
  const displayedSeeds = showFavorites
    ? minecraftSeeds.filter(seed => favorites.includes(seed.id))
    : minecraftSeeds

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Game Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-4">Minecraft Seeds</h1>
          <p className="text-xl text-gray-600">Find seeds for quick nether access, strongholds, and more</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-4">
            <button
              onClick={() => setShowFavorites(false)}
              className={`px-4 py-2 rounded-lg ${
                !showFavorites
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All Seeds
            </button>
            <button
              onClick={() => setShowFavorites(true)}
              className={`px-4 py-2 rounded-lg ${
                showFavorites
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              My Favorites
            </button>
          </div>
          <input
            type="text"
            placeholder="Search seeds..."
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedSeeds.map((seed) => (
            <div key={seed.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <Image
                  src={seed.imageUrl}
                  alt={seed.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-semibold">{seed.title}</h2>
                  <button
                    onClick={() => toggleFavorite(seed.id)}
                    className={`p-2 rounded-full hover:bg-gray-100 ${
                      favorites.includes(seed.id) ? 'text-red-500' : 'text-gray-400'
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill={favorites.includes(seed.id) ? 'currentColor' : 'none'}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>
                <p className="text-gray-600 mb-4">{seed.description}</p>
                <div className="mb-4">
                  <h3 className="font-medium mb-2">Seed: <span className="font-mono">{seed.seed}</span></h3>
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    {seed.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span>v{seed.version}</span>
                  <div className="flex items-center space-x-2">
                    <span>{seed.rating} ★</span>
                    {seed.Saves && (
                      <span>{seed.Saves.toLocaleString()} saves</span>
                    )}
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                  Copy Seed
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 