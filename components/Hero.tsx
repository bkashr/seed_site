/**
 * Hero Component
 * 
 * This component displays the hero section with site description
 * and featured seed of the day.
 */

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-synth-dark via-synth-midnight to-synth-dark" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-synth-grid opacity-10" />
      
      {/* Scanlines overlay */}
      <div className="absolute inset-0 bg-synth-scanlines opacity-5" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-synth-light mb-6 glow-text">
            Discover Amazing Game Seeds
          </h1>
          <p className="text-xl text-synth-light/70 mb-8 font-medium">
            Find and share the best seeds for your favorite games. 
            Join our community of gamers and discover unique experiences.
          </p>
          
          {/* Seed of the Day */}
          <div className="synth-card p-6 mb-8 inline-block">
            <h2 className="text-xl font-semibold text-synth-light mb-2 glow-text">Seed of the Day</h2>
            <p className="text-synth-light/70 mb-4 font-medium">
              Minecraft Speedrun Seed #123
            </p>
            <Link 
              href="/games/minecraft/seeds/123"
              className="synth-button inline-block"
            >
              View Seed
            </Link>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/games"
              className="synth-button"
            >
              Browse Games
            </Link>
            <Link 
              href="/about"
              className="synth-button bg-synth-secondary hover:bg-synth-primary"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 