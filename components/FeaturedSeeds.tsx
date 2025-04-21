/**
 * FeaturedSeeds Component
 * 
 * This component displays a carousel of featured seeds with their details.
 */

import Link from 'next/link'

// Sample data - This would typically come from your database
const featuredSeeds = [
  {
    id: 1,
    game: 'Minecraft',
    title: 'Epic Mountain Range',
    description: 'Discover a breathtaking mountain range with hidden caves and waterfalls.',
    image: '/images/seeds/minecraft-mountains.jpg',
    seed: '123456789',
    rating: 4.8
  },
  {
    id: 2,
    game: 'Terraria',
    title: 'Treasure Island',
    description: 'A small island filled with rare treasures and unique biomes.',
    image: '/images/seeds/terraria-island.jpg',
    seed: '987654321',
    rating: 4.6
  },
  {
    id: 3,
    game: 'No Man\'s Sky',
    title: 'Paradise Planet',
    description: 'A lush planet with perfect weather and abundant resources.',
    image: '/images/seeds/nms-paradise.jpg',
    seed: '456789123',
    rating: 4.9
  }
]

export default function FeaturedSeeds() {
  return (
    <div className="relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-synth-dark via-synth-midnight to-synth-dark rounded-lg" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-synth-grid opacity-10 rounded-lg" />
      
      {/* Scanlines overlay */}
      <div className="absolute inset-0 bg-synth-scanlines opacity-5 rounded-lg" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {featuredSeeds.map((seed) => (
          <div 
            key={seed.id}
            className="synth-card p-6 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="relative mb-4">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <img 
                  src={seed.image} 
                  alt={seed.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute top-2 left-2">
                <span className="px-2 py-1 bg-synth-primary/20 text-synth-primary text-sm font-medium rounded">
                  {seed.game}
                </span>
              </div>
              <div className="absolute top-2 right-2">
                <span className="px-2 py-1 bg-synth-secondary/20 text-synth-secondary text-sm font-medium rounded">
                  {seed.rating} ★
                </span>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-synth-light mb-2 glow-text">
              {seed.title}
            </h3>
            <p className="text-synth-light/70 mb-4 font-medium">
              {seed.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-synth-primary font-medium">
                Seed: {seed.seed}
              </span>
              <Link 
                href={`/games/${seed.game.toLowerCase()}/seeds/${seed.id}`}
                className="synth-button"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 