import React, { useEffect, useState } from "react"
import { API } from "@/util/API"
import { CATEGORIES } from "@/constants"
import Link from "next/link"

export default function HeroGrid(categories) {
  return (
    <div className="min-h-screen p-8 lg:p-16 grid grid-cols-1 grid-rows-5 gap-4 h-full w-full lg:grid-cols-7 lg:grid-rows-3">
      <div className="hero lg:col-span-7 bg-mint">
        <Link href={`/products`}>
          <div className="hero-content text-center font-bold text-2xl font-mono text-black">
            All
          </div>
        </Link>
      </div>
      <div className="hero lg:col-span-5 lg:row-start-2 bg-tiffany-blue">
        <Link href={`/products}`}>
          {" "}
          <div className="hero-content text-center font-bold text-2xl font-mono text-black">
            {categories[0]}
          </div>
        </Link>{" "}
      </div>

      <div className="hero lg:col-span-2 lg:col-start-6 lg:row-start-2 bg-mint-green">
        <Link href={`/products}`}>
          <div className="hero-content text-center font-bold text-2xl font-mono text-black">
            {categories[1]}
          </div>
        </Link>{" "}
      </div>

      <div className="hero lg:col-span-3 lg:row-start-3 bg-mint-cream">
        <Link href={`/products}`}>
          <div className="hero-content text-center font-bold text-2xl font-mono text-black">
            {categories[2]}
          </div>
        </Link>{" "}
      </div>

      <div className="hero lg:col-span-4 lg:col-start-4 lg:row-start-3 bg-zomp">
        <Link href={`/products}`}>
          {" "}
          <div className="hero-content text-center font-bold text-2xl font-mono text-black">
            {categories[3]}
          </div>
        </Link>
      </div>
    </div>
  )
}
