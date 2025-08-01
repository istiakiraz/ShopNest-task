'use client'
import React from 'react'
import { Product } from '../../../../typing'
import { Star } from 'lucide-react' 
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="bg-white border-t-2 border-l-2 border-r-2 border-indigo-200 rounded-2xl h-[350px]  overflow-hidden hover:shadow-2xl transition-all duration-500">
      <Image
        src={product.image}
        alt={product.title}
        width={100}
        height={100}
        className="object-contain w-[50%] h-[50%] mx-auto p-4"
      />
      <div className="p-4 pb-9 rounded-2xl  bg-indigo-200 space-y-2">
        <h2 className="text-lg font-semibold line-clamp-1">{product.title}</h2>
      
        <div className="flex justify-between mb-4 items-center">
           <h3 className='capitalize text-sm border-2 rounded w-fit px-2 '>{product.category}</h3>
            <div className="flex items-center text-sm text-gray-600 font-medium">
            <Star className="w-4 h-4 fill-gray-600" />
            <span className="ml-1">{product.rating.rate} ({product.rating.count})</span>
          </div>
         
        </div>
        <div className='flex justify-between mb-4 items-center'>
              <span>
                <h5 className='text-sm text-gray-400  -mb-1 font-bold' >PRICE</h5>
            <span className="text-2xl font-bold  text-indigo-500">${product.price}</span>
            </span>

          <Link href={`product/product-details/${product.id}`}>
            <button className="px-4 py-2 text-sm bg-indigo-500 text-white rounded cursor-pointer hover:bg-indigo-800 transition">View Details</button>
          </Link>

        </div>
          
      </div>
    </div>
  )
}

