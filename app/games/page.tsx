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
      <div className="min-h-screen bg-gradient-to-br from-synth-dark via-synth-midnight to-synth-dark flex items-center justify-center">
        <div className="text-xl text-synth-light">Loading games...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-synth-dark via-synth-midnight to-synth-dark flex items-center justify-center">
        <div className="text-xl text-synth-primary">Error: {error}</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-synth-dark via-synth-midnight to-synth-dark">
      {/* Background grid pattern */}
      <div className="fixed inset-0 bg-synth-grid opacity-10 pointer-events-none" />
      
      {/* Scanlines overlay */}
      <div className="fixed inset-0 bg-synth-scanlines opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-4 py-12 relative">
        <h1 className="text-4xl font-bold mb-8 text-synth-light text-center glow-text">All Games</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <Link
              key={game.id}
              href={`/games/${game.slug}`}
              className="block"
            >
              <div className="synth-card overflow-hidden hover:-translate-y-1 transition-all duration-300">
                <div className="h-48 relative">
                  <Image
                    src={`/images/games/${game.slug}.jpg`}
                    alt={`${game.name} game screenshot`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={game.slug === 'minecraft' || game.slug === 'terraria'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-synth-dark/90 via-synth-dark/50 to-transparent" />
                  <h2 className="absolute bottom-0 left-0 right-0 p-4 text-2xl font-bold text-synth-light glow-text">
                    {game.name}
                  </h2>
                </div>
                <div className="p-6">
                  <p className="text-synth-light/70 mb-4 font-medium">{game.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-synth-primary font-medium">
                      {game.seed_count} {game.seed_count === 1 ? 'seed' : 'seeds'}
                    </span>
                    <span className="text-synth-secondary font-medium">
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