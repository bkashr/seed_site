/**
 * Hero Component
 * 
 * This component displays the main hero section of the homepage,
 * featuring a title, description, and featured game of the day.
 */
export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Main Content */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Your Perfect Game Seed
            </h1>
            <p className="text-xl mb-6">
              Discover and share the best seeds for your favorite games.
              From speedruns to casual play, we've got you covered.
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Browse Seeds
            </button>
          </div>

          {/* Featured Game */}
          <div className="md:w-1/2 bg-white bg-opacity-10 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Featured Game</h2>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white rounded-lg"></div>
              <div>
                <h3 className="text-xl font-semibold">Minecraft</h3>
                <p className="text-gray-200">Speedrun Seed #12345</p>
                <p className="text-sm text-gray-300 mt-2">
                  Quick nether access, stronghold at spawn, and more!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 