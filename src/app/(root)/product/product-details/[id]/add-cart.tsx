import { ShoppingCart } from 'lucide-react'
import React from 'react'

export default function AddToCart() {
  return (
   <button className="px-4 py-2 flex items-center gap-2 text-sm bg-indigo-500 text-white rounded cursor-pointer hover:bg-indigo-800 transition">
          <ShoppingCart></ShoppingCart> Add to Cart
        </button>
  )
}
