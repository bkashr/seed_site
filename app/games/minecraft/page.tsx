/**
 * Minecraft Seeds Page
 * 
 * This page displays a collection of Minecraft seeds
 * with their descriptions and features.
 */

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
    version: '1.20.4'
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
    version: '1.20.4'
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
    version: '1.20.4'
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
    version: '1.20.4'
  }
]

export default function MinecraftSeeds() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Minecraft Seeds</h1>
        <p className="text-gray-600">
          Browse our collection of hand-picked Minecraft seeds. Each seed includes detailed information
          about its features and coordinates for important locations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {minecraftSeeds.map((seed) => (
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
                <span className="text-sm text-gray-500">v{seed.version}</span>
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
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                Copy Seed
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 