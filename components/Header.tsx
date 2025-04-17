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
          <nav className="flex space-x-8">
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
              href="/about"
              className={`text-gray-600 hover:text-gray-900 ${
                pathname === '/about' ? 'text-blue-600 font-medium' : ''
              }`}
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
} 