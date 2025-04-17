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
    <Link href={`/games/${slug}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        {/* Game Image */}
        <div className="h-48 relative">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover"
          />
        </div>

        {/* Game Info */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          
          {/* Seed Count and Tags */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              {seeds.toLocaleString()} seeds
            </span>
            <span className="text-blue-500 font-medium">
              View Seeds →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
} 