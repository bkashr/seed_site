/**
 * Minecraft Seeds Page
 * 
 * This page displays a collection of Minecraft seeds
 * with their descriptions and features.
 */

'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { Seed } from '@/lib/supabase'

export default function MinecraftSeeds() {
  // State for seeds and favorites
  const [seeds, setSeeds] = useState<Seed[]>([])
  const [favorites, setFavorites] = useState<number[]>([])
  const [showFavorites, setShowFavorites] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch seeds on component mount
  useEffect(() => {
    const fetchSeeds = async () => {
      try {
        setLoading(true)
        // First, get the Minecraft game ID
        const { data: gameData, error: gameError } = await supabase
          .from('games')
          .select('id')
          .eq('slug', 'minecraft')
          .single()

        if (gameError) throw gameError
        if (!gameData) throw new Error('Minecraft game not found')

        // Then fetch seeds for Minecraft
        const { data: seedsData, error: seedsError } = await supabase
          .from('seeds')
          .select('*')
          .eq('game_id', gameData.id)
          .order('created_at', { ascending: false })

        if (seedsError) throw seedsError
        setSeeds(seedsData || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
        console.error('Error fetching seeds:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchSeeds()
  }, [])

  // Toggle favorite status
  const toggleFavorite = (seedId: number) => {
    setFavorites(prev => 
      prev.includes(seedId)
        ? prev.filter(id => id !== seedId)
        : [...prev, seedId]
    )
  }

  // Filter seeds based on favorites toggle
  const displayedSeeds = showFavorites
    ? seeds.filter(seed => favorites.includes(seed.id))
    : seeds

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl">Loading seeds...</div>
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
      {/* Game Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-4">Minecraft Seeds</h1>
          <p className="text-xl text-gray-600">Find seeds for quick nether access, strongholds, and more</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-4">
            <button
              onClick={() => setShowFavorites(false)}
              className={`px-4 py-2 rounded-lg ${
                !showFavorites
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All Seeds
            </button>
            <button
              onClick={() => setShowFavorites(true)}
              className={`px-4 py-2 rounded-lg ${
                showFavorites
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              My Favorites
            </button>
          </div>
          <input
            type="text"
            placeholder="Search seeds..."
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedSeeds.map((seed) => (
            <div key={seed.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {seed.image_url && (
                <div className="h-48 relative">
                  <Image
                    src={seed.image_url}
                    alt={seed.description}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-semibold">Seed: {seed.seed_code}</h2>
                  <button
                    onClick={() => toggleFavorite(seed.id)}
                    className={`p-2 rounded-full hover:bg-gray-100 ${
                      favorites.includes(seed.id) ? 'text-red-500' : 'text-gray-400'
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill={favorites.includes(seed.id) ? 'currentColor' : 'none'}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>
                <p className="text-gray-600 mb-4">{seed.description}</p>
                <div className="mb-4">
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    {seed.tags.map((tag, index) => (
                      <li key={index}>{tag}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span>{new Date(seed.created_at).toLocaleDateString()}</span>
                  <div className="flex items-center space-x-2">
                    {seed.rating && <span>{seed.rating} ★</span>}
                    <span>{seed.saves} saves</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                  Copy Seed
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 