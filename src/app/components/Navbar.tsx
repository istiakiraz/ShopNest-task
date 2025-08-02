import Image from "next/image";
import Link from "next/link";
import React from "react";
import Search from "./shared/Search";
import { HeartIcon, User2Icon } from "lucide-react";
import ShoppingCartBtn from "./shared/ShoppingCartBtn";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <div className="h-[10vh] sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between w-[90%] md:w-4/5 mx-auto h-full">
        {/* logo  */}
        <Link href="/">
          <Image
            src="/shopnest.png"
            alt="shop nest logo"
            className="hover:scale-110 duration-600"
            width={120}
            height={120}
          />
        </Link>

        {/* nav menu */}
        <div className="flex items-center space-x-6">
          {/* search feature */}
          <Search></Search>

          {/* book mark */}
          <HeartIcon cursor={"pointer"}></HeartIcon>

          {/* shopping cart feature */}
          <ShoppingCartBtn></ShoppingCartBtn>

          {/* user btn */}

          {/* sign-in user */}
          <SignedIn>
            <UserButton></UserButton>
          </SignedIn>

          {/* user not sign-in */}
          <SignedOut>
            <SignInButton>
                <div className="cursor-pointer">
    <User2Icon />
  </div>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}
