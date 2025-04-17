/**
 * Games Listing Page
 * 
 * This page displays all available games with their seed counts
 * and descriptions.
 */

import Image from 'next/image'
import Link from 'next/link'

// Sample games data
const games = [
  {
    name: 'Minecraft',
    description: 'Explore endless worlds and build anything you can imagine',
    seeds: 1500,
    imageUrl: '/images/games/minecraft.jpg',
    slug: 'minecraft'
  },
  {
    name: 'Terraria',
    description: 'Dig, fight, explore, build in this action-packed adventure game',
    seeds: 800,
    imageUrl: '/images/games/terraria.jpg',
    slug: 'terraria'
  },
  {
    name: 'Balatro',
    description: 'A poker-inspired roguelike deck builder with unique seed-based runs',
    seeds: 300,
    imageUrl: '/images/games/balatro.jpg',
    slug: 'balatro'
  },
  {
    name: 'Songs of Syx',
    description: 'A city-building game with complex simulation and seed-based world generation',
    seeds: 250,
    imageUrl: '/images/games/songs-of-syx.jpg',
    slug: 'songs-of-syx'
  },
  {
    name: 'No Man\'s Sky',
    description: 'Explore an infinite procedurally generated universe with unique planets and systems',
    seeds: 1200,
    imageUrl: '/images/games/no-mans-sky.jpg',
    slug: 'no-mans-sky'
  },
  {
    name: 'Valheim',
    description: 'A brutal exploration and survival game with seed-based world generation',
    seeds: 600,
    imageUrl: '/images/games/valheim.jpg',
    slug: 'valheim'
  },
  {
    name: 'The Binding of Isaac',
    description: 'A randomly generated action RPG shooter with unique seed-based runs',
    seeds: 400,
    imageUrl: '/images/games/binding-of-isaac.jpg',
    slug: 'binding-of-isaac'
  },
  {
    name: 'Slay the Spire',
    description: 'A roguelike deck-building game with seed-based runs and unique card combinations',
    seeds: 350,
    imageUrl: '/images/games/slay-the-spire.jpg',
    slug: 'slay-the-spire'
  },
  {
    name: 'Dwarf Fortress',
    description: 'A complex simulation game with detailed world generation and unique seeds',
    seeds: 500,
    imageUrl: '/images/games/dwarf-fortress.jpg',
    slug: 'dwarf-fortress'
  },
  {
    name: 'RimWorld',
    description: 'A sci-fi colony sim driven by an intelligent AI storyteller and seed-based generation',
    seeds: 450,
    imageUrl: '/images/games/rimworld.jpg',
    slug: 'rimworld'
  },
  {
    name: 'Factorio',
    description: 'A factory-building game with seed-based map generation and resource distribution',
    seeds: 300,
    imageUrl: '/images/games/factorio.jpg',
    slug: 'factorio'
  },
  {
    name: 'Stardew Valley',
    description: 'A farming RPG with seed-based farm layouts and world generation',
    seeds: 450,
    imageUrl: '/images/games/stardew-valley.jpg',
    slug: 'stardew-valley'
  }
]

export default function GamesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">All Games</h1>
        <p className="text-gray-600">
          Browse our collection of games with available seeds. Each game offers unique
          procedurally generated content that you can customize with specific seeds.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {games.map((game) => (
          <Link 
            key={game.slug} 
            href={`/games/${game.slug}`}
            className="block"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <Image
                  src={game.imageUrl}
                  alt={`${game.name} game screenshot`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={game.slug === 'minecraft' || game.slug === 'terraria'}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h2 className="absolute bottom-0 left-0 right-0 p-4 text-2xl font-bold text-white">
                  {game.name}
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{game.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {game.seeds.toLocaleString()} seeds
                  </span>
                  <span className="text-blue-500 font-medium">
                    View Seeds →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 