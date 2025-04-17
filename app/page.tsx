/**
 * Home Page Component
 * 
 * This is the main landing page of the website.
 * It displays the hero section, popular games, and featured seeds.
 */

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import GameCard from '@/components/GameCard'
import FeaturedSeeds from '@/components/FeaturedSeeds'
import Footer from '@/components/Footer'

// Sample game data
const games = [
  {
    name: 'Minecraft',
    description: 'Explore endless worlds and build anything you can imagine',
    seeds: 1500,
    imageUrl: 'https://via.placeholder.com/400x300?text=Minecraft',
    slug: 'minecraft'
  },
  {
    name: 'Terraria',
    description: 'Dig, fight, explore, build in this action-packed adventure game',
    seeds: 800,
    imageUrl: 'https://via.placeholder.com/400x300?text=Terraria',
    slug: 'terraria'
  },
  {
    name: 'Balatro',
    description: 'A poker-inspired roguelike deck builder',
    seeds: 300,
    imageUrl: 'https://via.placeholder.com/400x300?text=Balatro',
    slug: 'balatro'
  }
]

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Popular Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {games.map((game) => (
              <GameCard
                key={game.slug}
                name={game.name}
                description={game.description}
                seeds={game.seeds}
                imageUrl={game.imageUrl}
                slug={game.slug}
              />
            ))}
          </div>
        </div>
      </section>
      <FeaturedSeeds />
    </main>
  )
} 