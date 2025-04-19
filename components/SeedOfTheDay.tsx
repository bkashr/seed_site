/**
 * SeedOfTheDay Component
 * 
 * This component displays the featured seed of the day,
 * highlighting a popular seed from our collection.
 */

import Image from 'next/image'
import Link from 'next/link'

// Sample seed of the day data
const seedOfTheDay = {
  id: 1,
  game: 'Minecraft',
  title: 'Speedrun Paradise',
  description: 'Perfect for speedrunners - stronghold at spawn, nether fortress nearby, and village with blacksmith.',
  features: [
    'Stronghold at spawn',
    'Nether fortress within 200 blocks',
    'Village with blacksmith',
    'Desert temple nearby'
  ],
  imageUrl: '/images/games/minecraft.jpg',
  gameSlug: 'minecraft',
  seed: '123456789',
  version: '1.20.4',
  popularity: 95, // out of 100
  downloads: 1250
}

export default function SeedOfTheDay() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Seed of the Day</h2>
          <p className="text-gray-600">Today's most popular seed, hand-picked from our collection</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 h-64 md:h-auto relative">
              <Image
                src={seedOfTheDay.imageUrl}
                alt={seedOfTheDay.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 md:w-1/2">
              <div className="flex items-center mb-4">
                <span className="text-sm text-blue-500 font-medium">{seedOfTheDay.game}</span>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-sm text-gray-500">v{seedOfTheDay.version}</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{seedOfTheDay.title}</h3>
              <p className="text-gray-600 mb-6">{seedOfTheDay.description}</p>
              
              <div className="mb-6">
                <h4 className="font-medium mb-2">Seed: <span className="font-mono">{seedOfTheDay.seed}</span></h4>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {seedOfTheDay.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-24 bg-gray-200 rounded-full h-2.5 mr-2">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: `${seedOfTheDay.popularity}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600">{seedOfTheDay.popularity}% Popular</span>
                </div>
                <span className="text-sm text-gray-600">{seedOfTheDay.downloads.toLocaleString()} downloads</span>
              </div>

              <Link 
                href={`/games/${seedOfTheDay.gameSlug}/seeds/${seedOfTheDay.id}`}
                className="block w-full bg-blue-600 text-white text-center py-3 px-4 rounded hover:bg-blue-700 transition-colors"
              >
                View Seed Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 