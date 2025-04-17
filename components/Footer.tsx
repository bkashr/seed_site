/**
 * Footer Component
 * 
 * This component displays the site footer with navigation links,
 * about information, and social media links.
 */
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About SeedLookup</h3>
            <p className="text-gray-400">
              Your one-stop destination for finding and sharing game seeds.
              Helping gamers find the perfect starting point for their adventures.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Games</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Submit Seed</a></li>
            </ul>
          </div>

          {/* Games */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Games</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Minecraft</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terraria</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Balatro</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">View All</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Email: support@seedlookup.com</li>
              <li className="text-gray-400">Twitter: @seedlookup</li>
              <li className="text-gray-400">Discord: Join our community</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SeedLookup. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 