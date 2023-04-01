import Image from "next/legacy/image";
import React from "react";
import {
  SearchIcon,
  MenuIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

export default function Header() {
  return (
    <>
      <header>
        {/* top nav */}
        <div className="bg-amazon_blue flex py-2 items-center flex-grow">
          {/* logo */}
          <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
            <Image
              src="https://links.papareact.com/f90"
              width={150}
              height={40}
              objectFit="contain"
              className="cursor-pointer"
            />
          </div>

          {/* Search */}
          <div className=" bg-yellow-400 hover:bg-yellow-500 cursor-pointer sm:flex hidden items-center h-10 rounded-md flex-grow">
            <input
              type="text"
              className=" outline-none p-2 h-full w-6 flex-grow flex-shrink rounded-l-md"
            />
            <SearchIcon className="h-12 p-4" />
          </div>

          {/* Right */}
          <div className="text-white cursor-pointer text-xs mx-6 flex items-center space-x-6 whitespace-nowrap">
            <div className="link">
              <p> Hello Maple Arisa </p>
              <p className="font-extrabold md:text-sm"> Account & List </p>
            </div>
            <div className="link">
              <p> Return </p>
              <p className="font-extrabold md:text-sm"> & Order </p>
            </div>
            <div className="relative link flex items-center">
              <span className="absolute top-0 right-0 text-black bg-yellow-400 w-4 h-4 text-center font-bold rounded-full md:right-10">
                0
              </span>
              <ShoppingCartIcon className="h-10" />
              <p className="mt-2 hidden md:inline font-extrabold md:text-sm">
                Basket
              </p>
            </div>
          </div>
        </div>

        {/* bottom nav */}
        <div className="text-white bg-amazon_blue-light p-2 pl-6 flex items-center space-x-3 text-sm whitespace-nowrap">
          <p className="menu">
            <MenuIcon className="h-6 mr-1" />
            All
          </p>
          <p className="menu"> Prime Video </p>
          <p className="menu"> Amazon Business </p>
          <p className="menu"> Today's Deals </p>
          <p className="menu hidden lg:inline-flex"> Electronics </p>
          <p className="menu hidden lg:inline-flex"> Food & Grocery </p>
          <p className="menu hidden lg:inline-flex"> Prime </p>
          <p className="menu hidden lg:inline-flex"> Buy Again </p>
          <p className="menu hidden lg:inline-flex"> Shopper Toolkit </p>
          <p className="menu hidden lg:inline-flex"> Health & Personal Care </p>
        </div>
      </header>
    </>
  );
}
