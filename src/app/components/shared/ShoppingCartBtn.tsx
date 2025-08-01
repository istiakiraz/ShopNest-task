import { ShoppingBagIcon } from 'lucide-react'
import React from 'react'

export default function ShoppingCartBtn() {
  return (
    <div className='relative'>
        <span className='absolute -top-3 bg-indigo-500 px-1.5 text-white text-sm -right-2 rounded-full'>0</span>
        <ShoppingBagIcon cursor={'pointer'}></ShoppingBagIcon>

    </div>
  )
}
