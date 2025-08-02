"use client"

import { ShoppingBagIcon } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import CartSideBar from "./CartSideBar";

export default function ShoppingCartBtn() {

   const items =  useSelector((state: RootState)=> state.cart.items)
   const totalQuantity = items.reduce((total, item) => total+item.quantity ,0)


  return (

    <Sheet>
      <SheetTrigger>
    <div className="relative">
      <span className="absolute -top-3 bg-indigo-500 px-1.5 text-white text-sm -right-2 rounded-full">
        {totalQuantity}
      </span>
      <ShoppingBagIcon cursor={"pointer"}></ShoppingBagIcon>
    </div>
    </SheetTrigger>
    <SheetContent className="pt-8 px-4 overflow-auto h-full">
      {/* cart side bar content */}
      <div><CartSideBar items={items}></CartSideBar></div>
    </SheetContent>
    </Sheet>
  );
}
