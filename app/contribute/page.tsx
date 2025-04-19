/**
 * Contribute Page Component
 * 
 * This page allows users to submit new seeds for review and inclusion on the site.
 * Users can provide game information, seed details, and additional context.
 */

'use client'

import { useState } from 'react'

// Sample games list - in a real app, this would come from your database
const games = [
  { id: 'minecraft', name: 'Minecraft' },
  { id: 'terraria', name: 'Terraria' },
  { id: 'balatro', name: 'Balatro' },
  { id: 'no-mans-sky', name: 'No Man\'s Sky' },
  { id: 'valheim', name: 'Valheim' },
  { id: 'binding-of-isaac', name: 'The Binding of Isaac' },
  { id: 'slay-the-spire', name: 'Slay the Spire' }
]

export default function ContributePage() {
  // Form state
  const [formData, setFormData] = useState({
    game: '',
    seed: '',
    title: '',
    description: '',
    version: '',
    features: '',
    additionalInfo: '',
    contactEmail: ''
  })

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData)
    // Show success message or redirect
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Contribute a Seed</h1>
        <p className="text-gray-600 mb-8">
          Share your favorite game seeds with the community. Your submission will be reviewed
          and, if approved, added to our collection with credit to you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Game Selection */}
          <div>
            <label htmlFor="game" className="block text-sm font-medium text-gray-700 mb-1">
              Game *
            </label>
            <select
              id="game"
              name="game"
              value={formData.game}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select a game</option>
              {games.map(game => (
                <option key={game.id} value={game.id}>
                  {game.name}
                </option>
              ))}
            </select>
          </div>

          {/* Seed Number */}
          <div>
            <label htmlFor="seed" className="block text-sm font-medium text-gray-700 mb-1">
              Seed Number *
            </label>
            <input
              type="text"
              id="seed"
              name="seed"
              value={formData.seed}
              onChange={handleChange}
              required
              placeholder="Enter the seed number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Seed Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Seed Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Give your seed a descriptive title"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Describe what makes this seed special"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Game Version */}
          <div>
            <label htmlFor="version" className="block text-sm font-medium text-gray-700 mb-1">
              Game Version *
            </label>
            <input
              type="text"
              id="version"
              name="version"
              value={formData.version}
              onChange={handleChange}
              required
              placeholder="e.g., 1.20.4 for Minecraft"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Key Features */}
          <div>
            <label htmlFor="features" className="block text-sm font-medium text-gray-700 mb-1">
              Key Features
            </label>
            <textarea
              id="features"
              name="features"
              value={formData.features}
              onChange={handleChange}
              rows={3}
              placeholder="List key features or points of interest (one per line)"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Additional Information */}
          <div>
            <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">
              Additional Information
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              rows={3}
              placeholder="Any other relevant information about the seed"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Contact Email */}
          <div>
            <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-1">
              Contact Email *
            </label>
            <input
              type="email"
              id="contactEmail"
              name="contactEmail"
              value={formData.contactEmail}
              onChange={handleChange}
              required
              placeholder="Your email (for credit and updates)"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit Seed
            </button>
          </div>

          <p className="text-sm text-gray-500">
            * Required fields. Your submission will be reviewed before being added to the site.
            We'll contact you at the provided email if we need more information.
          </p>
        </form>
      </div>
    </div>
  )
} 