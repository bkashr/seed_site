/**
 * Profile Page Component
 * 
 * This page displays the user's profile information, including their
 * contributed seeds, favorites, and account settings.
 */

'use client'

import { useState } from 'react'
import Image from 'next/image'

// Sample user data - in a real app, this would come from your authentication system
const userData = {
  username: 'GameExplorer123',
  email: 'user@example.com',
  joinDate: 'January 2024',
  totalContributions: 15,
  totalFavorites: 8,
  profileImage: '/images/default-avatar.png',
  bio: 'Passionate gamer and seed collector. Love exploring new worlds and sharing my discoveries with the community.'
}

// Sample contributed seeds
const contributedSeeds = [
  {
    id: 1,
    game: 'Minecraft',
    title: 'Speedrun Paradise',
    description: 'Perfect for speedrunners - stronghold at spawn',
    date: '2 days ago',
    status: 'Approved'
  },
  {
    id: 2,
    game: 'Terraria',
    title: 'Builder\'s Dream',
    description: 'Large flat area with nearby resources',
    date: '1 week ago',
    status: 'Pending'
  }
]

// Sample favorite seeds
const favoriteSeeds = [
  {
    id: 3,
    game: 'Balatro',
    title: 'DNA Card Combo',
    description: 'Early DNA card with perfect synergies',
    date: '3 days ago'
  },
  {
    id: 4,
    game: 'Minecraft',
    title: 'Survival Island',
    description: 'Challenging island start with nearby resources',
    date: '1 week ago'
  }
]

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('contributions')

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center space-x-6">
            <div className="relative w-24 h-24">
              <Image
                src={userData.profileImage}
                alt="Profile"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{userData.username}</h1>
              <p className="text-gray-600">{userData.email}</p>
              <p className="text-gray-500 text-sm">Member since {userData.joinDate}</p>
              <p className="mt-2 text-gray-700">{userData.bio}</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{userData.totalContributions}</div>
            <div className="text-gray-600">Contributions</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{userData.totalFavorites}</div>
            <div className="text-gray-600">Favorites</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">4.8</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('contributions')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'contributions'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              My Contributions
            </button>
            <button
              onClick={() => setActiveTab('favorites')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'favorites'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Favorites
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'settings'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Settings
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          {activeTab === 'contributions' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">My Contributions</h2>
              <div className="space-y-4">
                {contributedSeeds.map((seed) => (
                  <div key={seed.id} className="border-b border-gray-200 pb-4 last:border-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{seed.title}</h3>
                        <p className="text-gray-600">{seed.game}</p>
                        <p className="text-sm text-gray-500 mt-1">{seed.description}</p>
                      </div>
                      <div className="text-right">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          seed.status === 'Approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {seed.status}
                        </span>
                        <p className="text-sm text-gray-500 mt-1">{seed.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'favorites' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Favorite Seeds</h2>
              <div className="space-y-4">
                {favoriteSeeds.map((seed) => (
                  <div key={seed.id} className="border-b border-gray-200 pb-4 last:border-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{seed.title}</h3>
                        <p className="text-gray-600">{seed.game}</p>
                        <p className="text-sm text-gray-500 mt-1">{seed.description}</p>
                      </div>
                      <p className="text-sm text-gray-500">{seed.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Username</label>
                  <input
                    type="text"
                    defaultValue={userData.username}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    defaultValue={userData.email}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Bio</label>
                  <textarea
                    defaultValue={userData.bio}
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Save Changes
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 