'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { Game } from '@/lib/supabase'

export default function TestPage() {
  const [games, setGames] = useState<Game[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setLoading(true)
        const { data, error } = await supabase
          .from('games')
          .select('*')
          .order('name')
        
        if (error) {
          throw error
        }
        
        setGames(data || [])
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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Supabase Connection Test</h1>
        
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Games from Database</h2>
          
          {games.length === 0 ? (
            <p className="text-gray-600">No games found in the database.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {games.map((game) => (
                <div key={game.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg">{game.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">Slug: {game.slug}</p>
                  <p className="text-gray-700">{game.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 