import { useState, useEffect } from 'react'
import ProductGrid from './components/ProductGrid'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/products')
        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }
        const data = await response.json()
        setProducts(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center">
                <span className="text-white text-lg">🧶</span>
              </div>
              <h1 className="text-xl md:text-2xl font-semibold text-gray-800 tracking-tight">
                Cozy Crochet
              </h1>
            </div>
            <button className="relative p-2 rounded-full bg-pink-100 hover:bg-pink-200 transition-colors">
              <svg
                className="w-6 h-6 text-pink-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-purple-400 text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Hero Section */}
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight">
            Handcrafted with Love
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Discover our collection of unique, handmade crochet creations. Each piece is crafted with care and attention to detail.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
          {['All', 'Amigurumi', 'Accessories', 'Home Decor', 'Wearables', 'Baby Items'].map(
            (category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  category === 'All'
                    ? 'bg-gradient-to-r from-pink-400 to-purple-400 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-pink-100 border border-pink-200'
                }`}
              >
                {category}
              </button>
            )
          )}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-16 h-16 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin mb-4"></div>
            <p className="text-gray-500 text-sm">Loading beautiful creations...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-red-800 font-semibold mb-2">Oops! Something went wrong</h3>
            <p className="text-red-600 text-sm">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium hover:bg-red-200 transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Product Grid */}
        {!loading && !error && <ProductGrid products={products} />}

        {/* Empty State */}
        {!loading && !error && products.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">🧶</span>
            </div>
            <h3 className="text-gray-800 font-semibold text-lg mb-2">No products yet</h3>
            <p className="text-gray-500 text-sm">Check back soon for new handmade creations!</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-pink-100 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <p className="text-gray-500 text-sm">
            Made with 💗 by Cozy Crochet
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
