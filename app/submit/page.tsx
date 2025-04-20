'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { Game, Seed } from '@/lib/supabase'

export default function SubmitSeed() {
  const [games, setGames] = useState<Game[]>([])
  const [selectedGame, setSelectedGame] = useState('')
  const [seedCode, setSeedCode] = useState('')
  const [description, setDescription] = useState('')
  const [tags, setTags] = useState<string[]>([])
  const [image, setImage] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  // Fetch games on component mount
  useEffect(() => {
    const fetchGames = async () => {
      const { data, error } = await supabase
        .from('games')
        .select('*')
        .order('name')
      
      if (error) {
        console.error('Error fetching games:', error)
        return
      }
      
      setGames(data || [])
    }

    fetchGames()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    setSuccess(false)

    try {
      // Upload image if provided
      let imageUrl = ''
      if (image) {
        const fileExt = image.name.split('.').pop()
        const fileName = `${Math.random()}.${fileExt}`
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('seed-images')
          .upload(fileName, image)

        if (uploadError) throw uploadError

        const { data: { publicUrl } } = supabase.storage
          .from('seed-images')
          .getPublicUrl(fileName)
        
        imageUrl = publicUrl
      }

      // Insert seed data
      const { error: insertError } = await supabase
        .from('seeds')
        .insert({
          game_id: selectedGame,
          seed_code: seedCode,
          description,
          tags,
          image_url: imageUrl,
          saves: 0
        })

      if (insertError) throw insertError

      setSuccess(true)
      // Reset form
      setSelectedGame('')
      setSeedCode('')
      setDescription('')
      setTags([])
      setImage(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Submit a New Seed</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="game" className="block text-sm font-medium text-gray-900">
              Game
            </label>
            <select
              id="game"
              value={selectedGame}
              onChange={(e) => setSelectedGame(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
              required
            >
              <option value="">Select a game</option>
              {games.map((game) => (
                <option key={game.id} value={game.id}>
                  {game.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="seedCode" className="block text-sm font-medium text-gray-900">
              Seed Code
            </label>
            <input
              type="text"
              id="seedCode"
              value={seedCode}
              onChange={(e) => setSeedCode(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-900">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
              required
            />
          </div>

          <div>
            <label htmlFor="tags" className="block text-sm font-medium text-gray-900">
              Tags (comma separated)
            </label>
            <input
              type="text"
              id="tags"
              value={tags.join(', ')}
              onChange={(e) => setTags(e.target.value.split(',').map(tag => tag.trim()))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
              placeholder="e.g. temple, jungle, loot"
            />
          </div>

          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-900">
              Screenshot (optional)
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
              className="mt-1 block w-full text-gray-900"
            />
          </div>

          {error && (
            <div className="text-red-600 text-sm">{error}</div>
          )}

          {success && (
            <div className="text-green-600 text-sm">
              Seed submitted successfully!
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Seed'}
          </button>
        </form>
      </div>
    </div>
  )
} 