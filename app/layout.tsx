// Import global styles and Next.js types
import './globals.css'
import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'

// Define metadata for SEO and browser tab information
export const metadata: Metadata = {
  title: 'Game Seed Lookup',
  description: 'Find the perfect game seed for your favorite games',
}

/**
 * RootLayout Component
 * 
 * This is the root layout component that wraps all pages in the application.
 * It provides the basic HTML structure and sets up the main container.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to be rendered
 * @returns {JSX.Element} The root layout structure
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // HTML document with English language setting
    <html lang="en">
      {/* Body with minimum height and light gray background */}
      <body className="min-h-screen bg-gray-50">
        {/* Header component that appears on all pages */}
        <Header />
        {/* Main content area that will contain the page-specific content */}
        <main>
          {children}
        </main>
        {/* Footer component that appears on all pages */}
        <Footer />
      </body>
    </html>
  )
} 