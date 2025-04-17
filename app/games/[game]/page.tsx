/**
 * Game Page Component
 * 
 * This component displays the page for a specific game,
 * including its seeds, filters, and search functionality.
 */

import { notFound } from 'next/navigation'

// This would typically come from a database
const games = {
  'minecraft': {
    name: 'Minecraft',
    description: 'Find seeds for quick nether access, strongholds, and more',
    totalSeeds: 1250,
    categories: ['Speedrun', 'Casual', 'Challenge', 'Building']
  },
  'terraria': {
    name: 'Terraria',
    description: 'Discover seeds with specific world features and loot',
    totalSeeds: 850,
    categories: ['Speedrun', 'Casual', 'Challenge', 'Building']
  },
  'balatro': {
    name: 'Balatro',
    description: 'Find seeds for specific card combinations and strategies',
    totalSeeds: 320,
    categories: ['Speedrun', 'Casual', 'Challenge']
  }
}

export default function GamePage({ params }: { params: { game: string } }) {
  const game = games[params.game as keyof typeof games]
  
  if (!game) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Game Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-4">{game.name}</h1>
          <p className="text-xl text-gray-600">{game.description}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Filters</h2>
              
              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Categories</h3>
                <div className="space-y-2">
                  {game.categories.map((category) => (
                    <label key={category} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Seed Count */}
              <div>
                <h3 className="font-medium mb-2">Seed Count</h3>
                <p className="text-gray-600">{game.totalSeeds} seeds available</p>
              </div>
            </div>
          </div>

          {/* Seeds Grid */}
          <div className="lg:col-span-3">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Available Seeds</h2>
                <input
                  type="text"
                  placeholder="Search seeds..."
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Placeholder for seeds list */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Speedrun Seed #123</h3>
                  <p className="text-gray-600 mb-2">Quick nether access, stronghold at spawn</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Added 2 days ago</span>
                    <button className="text-blue-500 hover:text-blue-600">View Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 