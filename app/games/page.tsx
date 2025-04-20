/**
 * Games Listing Page
 * 
 * This page displays all available games with their seed counts
 * and descriptions.
 */

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { supabase } from '@/lib/supabase'
import { Game } from '@/lib/supabase'

type GameWithSeedCount = Game & {
  seed_count: number
}

export default function GamesPage() {
  const [games, setGames] = useState<GameWithSeedCount[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setLoading(true)
        // Fetch games with their seed counts
        const { data, error } = await supabase
          .from('games')
          .select(`
            *,
            seeds:seeds(count)
          `)
          .order('name')
        
        if (error) throw error

        // Transform the data to include seed counts
        const gamesWithCounts = data.map(game => ({
          ...game,
          seed_count: game.seeds[0].count
        }))

        setGames(gamesWithCounts)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
        console.error('Error fetching games:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchGames()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl">Loading games...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-red-600">Error: {error}</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">All Games</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <Link
              key={game.id}
              href={`/games/${game.slug}`}
              className="block"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src={`/images/games/${game.slug}.jpg`}
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
                      {game.seed_count} {game.seed_count === 1 ? 'seed' : 'seeds'}
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
    </div>
  )
} 