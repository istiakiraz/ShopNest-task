"use client";
import { ShoppingCart } from "lucide-react";
import React from "react";
import { Product } from "../../../../../../typing";
import { useDispatch } from "react-redux";
import { addItem } from "../../../../../../store/cartSlice";
import { toast } from "sonner";

type Props = {
  product: Product;
};

export default function AddToCart({ product }: Props) {
  const dispatch = useDispatch();

  const handleAddToCart = (product: Product) => {
    dispatch(addItem(product));
    toast.success("Item Added To Cart");
  };

  return (
    <button
      onClick={() => {
        handleAddToCart(product);
      }}
      className="px-4 py-2 flex items-center gap-2 text-sm bg-indigo-500 text-white rounded cursor-pointer hover:bg-indigo-800 transition"
    >
      <ShoppingCart></ShoppingCart> Add to Cart
    </button>
  );
}
