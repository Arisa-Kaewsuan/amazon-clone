import React, { useState } from "react";
import Image from "next/legacy/image";
import { StarIcon } from "@heroicons/react/solid";
import CurrencyFormat from "react-currency-format";

export default function Product({
  id,
  title,
  price,
  description,
  category,
  image,
}) {
  const MAX_RATE = 5;
  const MIN_RATE = 1;
  const [rate] = useState(
    Math.floor(Math.random() * (MAX_RATE - MIN_RATE + MIN_RATE)) + MIN_RATE
  );

  const [hasPrime] = useState(Math.random() < 0.5);

  return (
    <div className="relative bg-white flex flex-col p-10 m-5 cursor-pointer">
      <p className="absolute top-2 right-2 text-gray-400 italic text-xs">
        {category}
      </p>

      <Image src={image} height={200} width={200} objectFit="contain" />

      <p>{title}</p>

      <div className="flex">
        {Array(rate)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>

      <p className="line-clamp-2 text-xs my-2">{description}</p>

      <div>
        <CurrencyFormat
          prefix={"£"}
          value={price}
          className="mb-5 focus:outline-none "
        />
      </div>

      {hasPrime && (
        <div className="flex space-x-2 items-center -mt-5">
          <img src="https://links.papareact.com/fdw" className="w-12" />
          <p className="text-sm font-bold text-gray-500">
            FREE Next-day Delivery
          </p>
        </div>
      )}

      <button className="bg-gradient-to-b from-yellow-200 to-yellow-400 p-2 text-xs md:text-xs border border-yellow-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-500">
        Add to Basket
      </button>
    </div>
  );
}
