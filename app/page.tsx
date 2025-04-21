/**
 * Home Page Component
 * 
 * This is the main landing page of the website.
 * It displays the hero section, featured seeds, and additional informative sections.
 */

'use client'

// Import necessary components
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import FeaturedSeeds from '@/components/FeaturedSeeds'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function Home() {
  const [stats, setStats] = useState({
    totalSeeds: 0,
    totalGames: 0,
    totalContributors: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true)
        
        // Fetch total seeds count
        const { count: seedsCount } = await supabase
          .from('seeds')
          .select('*', { count: 'exact', head: true })

        // Fetch total games count
        const { count: gamesCount } = await supabase
          .from('games')
          .select('*', { count: 'exact', head: true })

        // Fetch total contributors count
        const { count: contributorsCount } = await supabase
          .from('seeds')
          .select('user_id', { count: 'exact', head: true })

        setStats({
          totalSeeds: seedsCount || 0,
          totalGames: gamesCount || 0,
          totalContributors: contributorsCount || 0
        })
      } catch (err) {
        console.error('Error fetching stats:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-synth-dark via-synth-midnight to-synth-dark">
      {/* Background grid pattern */}
      <div className="fixed inset-0 bg-synth-grid opacity-10 pointer-events-none" />
      
      {/* Scanlines overlay */}
      <div className="fixed inset-0 bg-synth-scanlines opacity-5 pointer-events-none" />
      
      {/* Hero section with site description and seed of the day */}
      <Hero />
      
      {/* How It Works Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-synth-light mb-8 text-center glow-text">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: '1',
                title: 'Pick Your Game',
                description: 'Find your favorite game from a growing collection. New ones are always being added!'
              },
              {
                number: '2',
                title: 'Discover Cool Seeds',
                description: 'Browse through awesome seeds shared by fellow gamers.'
              },
              {
                number: '3',
                title: 'Start Your Adventure',
                description: 'Copy the seed, start your game, and enjoy a unique experience.'
              },
              {
                number: '4',
                title: 'Help Us Grow',
                description: 'Share your own discoveries and help the community grow!'
              }
            ].map((step, index) => (
              <div 
                key={index}
                className="synth-card p-6 text-center hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-synth-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-medium text-synth-primary">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-synth-light mb-2 glow-text">{step.title}</h3>
                <p className="text-synth-light/70 font-medium">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-synth-light mb-8 text-center glow-text">Community Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: stats.totalSeeds.toLocaleString(), label: 'Total Seeds' },
              { value: stats.totalGames, label: 'Supported Games' },
              { value: stats.totalContributors, label: 'Contributors' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="synth-card p-6 text-center hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl font-semibold text-synth-primary mb-2 glow-text">
                  {loading ? '...' : stat.value}
                </div>
                <p className="text-synth-light/70 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Seeds Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-synth-light mb-8 text-center glow-text">Featured Seeds</h2>
          <FeaturedSeeds />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-synth-light mb-4 glow-text">Have a Great Seed to Share?</h2>
          <p className="text-xl mb-8 text-synth-light/70 font-medium">
            Contribute your favorite seeds to help other players discover amazing experiences.
          </p>
          <a
            href="/contribute"
            className="synth-button inline-block"
          >
            Contribute a Seed
          </a>
        </div>
      </section>
    </main>
  )
} 