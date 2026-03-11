import { useState } from 'react'

function ProductCard({ product }) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const getCategoryColor = (category) => {
    const colors = {
      Amigurumi: 'bg-pink-100 text-pink-700',
      Accessories: 'bg-purple-100 text-purple-700',
      'Home Decor': 'bg-blue-100 text-blue-700',
      Wearables: 'bg-green-100 text-green-700',
      'Baby Items': 'bg-yellow-100 text-yellow-700',
    }
    return colors[category] || 'bg-gray-100 text-gray-700'
  }

  const handleAddToCart = () => {
    console.log(`Added ${product.name} to cart`)
  }

  return (
    <div className="group bg-white rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-pink-100 hover:border-pink-200">
      {/* Image Container */}
      <div className="relative h-52 overflow-hidden bg-gradient-to-br from-pink-50 to-purple-50">
        {/* Loading Skeleton */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-3 border-pink-200 border-t-pink-400 rounded-full animate-spin"></div>
          </div>
        )}

        {/* Error State */}
        {imageError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-pink-50">
            <span className="text-4xl mb-2">🧶</span>
            <span className="text-gray-400 text-xs">Image unavailable</span>
          </div>
        )}

        {/* Product Image */}
        <img
          src={`http://localhost:8080/images/${product.imageUrl}`}
          alt={product.name}
          className={`w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />

        {/* Badges Container */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
          {/* Category Badge */}
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
              product.category
            )}`}
          >
            {product.category}
          </span>

          {/* Customizable Badge */}
          {product.customizable && (
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              Customizable
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-pink-100 hover:scale-110">
          <svg
            className="w-5 h-5 text-pink-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Product Name */}
        <h3 className="font-semibold text-gray-800 text-lg leading-tight mb-1 line-clamp-1 group-hover:text-pink-600 transition-colors">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              {formatPrice(product.price)}
            </span>
          </div>

          <button
            onClick={handleAddToCart}
            className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <span className="hidden sm:inline">Add to Cart</span>
            <span className="sm:hidden">Add</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
