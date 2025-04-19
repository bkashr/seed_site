/**
 * Home Page Component
 * 
 * This is the main landing page of the website.
 * It displays the hero section, popular games, and additional informative sections.
 */

// Import necessary components
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import GameCard from '@/components/GameCard'
import Footer from '@/components/Footer'
import FeaturedSeeds from '@/components/FeaturedSeeds'

// Sample game data - This would typically come from a database or API
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
  }
]

// Community stats - This would typically come from your database
const stats = {
  totalSeeds: 5000,
  totalGames: 12,
  totalContributors: 250,
  averageRating: 4.8
}

export default function Home() {
  return (
    // Main container for the page content
    <main>
      {/* Hero section with site description and seed of the day */}
      <Hero />
      
      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Find a Game</h3>
              <p className="text-gray-600">Browse our collection of supported games and find the one you're interested in.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose a Seed</h3>
              <p className="text-gray-600">Select from our curated collection of seeds, each with detailed descriptions and features.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Start Playing</h3>
              <p className="text-gray-600">Use the seed in your game and enjoy a unique, curated experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Community Stats</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stats.totalSeeds.toLocaleString()}</div>
              <p className="text-gray-600">Total Seeds</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stats.totalGames}</div>
              <p className="text-gray-600">Supported Games</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stats.totalContributors}</div>
              <p className="text-gray-600">Contributors</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stats.averageRating}</div>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Seeds Section */}
      <FeaturedSeeds />

      {/* Popular Games section */}
      <section className="py-16 bg-white">
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

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Have a Great Seed to Share?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contribute your favorite seeds to help other players discover amazing experiences.
          </p>
          <a
            href="/contribute"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors inline-block"
          >
            Contribute a Seed
          </a>
        </div>
      </section>
    </main>
  )
} 