"use client"

import { ShoppingCart } from 'lucide-react'
import React from 'react'
import { Product } from '../../../../../../typing'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../../../../../store/cartSlice'
import { RootState } from '../../../../../../store/store'

type Props = {
  product: Product
}

export default function AddToCart({ product }: Props) {

    // const items =  useSelector((state: RootState)=> state.cart.items)
    // console.log(items);

    const dispatch = useDispatch()

   const handleAddToCart=(product: Product)=>{
        dispatch(addItem(product))
   }


  return (
   <button onClick={()=>{
    handleAddToCart(product)
   }} className="px-4 py-2 flex items-center gap-2 text-sm bg-indigo-500 text-white rounded cursor-pointer hover:bg-indigo-800 transition">
          <ShoppingCart></ShoppingCart> Add to Cart
        </button>
  )
}
