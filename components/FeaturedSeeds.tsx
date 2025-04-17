/**
 * FeaturedSeeds Component
 * 
 * This component displays a carousel of featured seeds
 * from different games.
 */

import Image from 'next/image'
import Link from 'next/link'

// Sample featured seeds data
const featuredSeeds = [
  {
    id: 1,
    game: 'Minecraft',
    title: 'Speedrun Seed #123',
    description: 'Quick nether access, stronghold at spawn',
    imageUrl: 'https://via.placeholder.com/400x300?text=Minecraft+Seed',
    gameSlug: 'minecraft'
  },
  {
    id: 2,
    game: 'Terraria',
    title: 'Building Seed #456',
    description: 'Perfect flat area for large builds',
    imageUrl: 'https://via.placeholder.com/400x300?text=Terraria+Seed',
    gameSlug: 'terraria'
  },
  {
    id: 3,
    game: 'Balatro',
    title: 'DNA Card Seed #789',
    description: 'Early DNA card with perfect synergies',
    imageUrl: 'https://via.placeholder.com/400x300?text=Balatro+Seed',
    gameSlug: 'balatro'
  }
]

export default function FeaturedSeeds() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Seeds</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredSeeds.map((seed) => (
            <Link 
              key={seed.id} 
              href={`/games/${seed.gameSlug}/seeds/${seed.id}`}
              className="block"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src={seed.imageUrl}
                    alt={seed.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-blue-500 font-medium">{seed.game}</span>
                  <h3 className="text-xl font-semibold mt-2 mb-2">{seed.title}</h3>
                  <p className="text-gray-600">{seed.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 