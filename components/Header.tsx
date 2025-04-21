'use client'

/**
 * Header Component
 * 
 * This component displays the site header with navigation links.
 */

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="relative border-b border-synth-primary/20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-synth-dark via-synth-midnight to-synth-dark" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-synth-grid opacity-10" />
      
      {/* Scanlines overlay */}
      <div className="absolute inset-0 bg-synth-scanlines opacity-5" />
      
      <div className="container mx-auto px-4 py-4 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-bold text-synth-primary hover:text-synth-secondary transition-colors duration-300 glow-text"
          >
            SeedLookup
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`text-sm font-medium transition-colors duration-300 ${
                pathname === '/' 
                  ? 'text-synth-primary glow-text' 
                  : 'text-synth-light/70 hover:text-synth-primary'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/games" 
              className={`text-sm font-medium transition-colors duration-300 ${
                pathname === '/games' 
                  ? 'text-synth-primary glow-text' 
                  : 'text-synth-light/70 hover:text-synth-primary'
              }`}
            >
              Games
            </Link>
            <Link 
              href="/contribute" 
              className={`text-sm font-medium transition-colors duration-300 ${
                pathname === '/contribute' 
                  ? 'text-synth-primary glow-text' 
                  : 'text-synth-light/70 hover:text-synth-primary'
              }`}
            >
              Contribute
            </Link>
            <Link 
              href="/profile" 
              className={`text-sm font-medium transition-colors duration-300 ${
                pathname === '/profile' 
                  ? 'text-synth-primary glow-text' 
                  : 'text-synth-light/70 hover:text-synth-primary'
              }`}
            >
              Profile
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden text-synth-light hover:text-synth-primary transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
} 