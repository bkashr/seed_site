/**
 * GameCard Component
 * 
 * This component displays a card for a specific game,
 * including its name, description, and available seed count.
 */

import Image from 'next/image'
import Link from 'next/link'

interface GameCardProps {
  name: string;
  description: string;
  seeds: number;
  imageUrl: string;
  slug: string;
}

export default function GameCard({ name, description, seeds, imageUrl, slug }: GameCardProps) {
  return (
    <div className="game-card pixel-border bg-white rounded-lg overflow-hidden">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-game-dark to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-2xl font-pixel text-white mb-2">{name}</h3>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-game-light font-arcade">
              {seeds.toLocaleString()} seeds
            </span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4 font-arcade">{description}</p>
        <Link
          href={`/games/${slug}`}
          className="game-button inline-block bg-game-primary text-white hover:bg-game-secondary"
        >
          View Seeds
        </Link>
      </div>
    </div>
  )
} 