'use client'

/**
 * Header Component
 * 
 * This component provides the main navigation for the website,
 * including links to the home page and games section.
 */

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-gray-800">
            Game Seed Lookup
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-8">
            <Link
              href="/"
              className={`text-gray-600 hover:text-gray-900 ${
                pathname === '/' ? 'text-blue-600 font-medium' : ''
              }`}
            >
              Home
            </Link>
            <Link
              href="/games"
              className={`text-gray-600 hover:text-gray-900 ${
                pathname.startsWith('/games') ? 'text-blue-600 font-medium' : ''
              }`}
            >
              Games
            </Link>
            <Link
              href="/submit"
              className={`text-gray-600 hover:text-gray-900 ${
                pathname === '/submit' ? 'text-blue-600 font-medium' : ''
              }`}
            >
              Submit Seed
            </Link>
            <Link
              href="/test"
              className={`text-gray-600 hover:text-gray-900 ${
                pathname === '/test' ? 'text-blue-600 font-medium' : ''
              }`}
            >
              Test DB
            </Link>
            <Link
              href="/contribute"
              className={`text-gray-600 hover:text-gray-900 ${
                pathname === '/contribute' ? 'text-blue-600 font-medium' : ''
              }`}
            >
              Contribute Seed
            </Link>
            <Link
              href="/profile"
              className={`text-gray-600 hover:text-gray-900 ${
                pathname === '/profile' ? 'text-blue-600 font-medium' : ''
              }`}
            >
              Profile
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
} 