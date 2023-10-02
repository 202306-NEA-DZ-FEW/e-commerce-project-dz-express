import React, { useEffect, useState } from "react"
import { API } from "@/util/API"
import { CATEGORIES } from "@/constants"
import Link from "next/link"
import { useCategory } from "@/context/CategoryContext"
import Image from "next/image"

export default function HeroGrid(categories) {
  const { setDefaultCategory, defaultCategory } = useCategory()

  const handleCategoryClick = (categoryKey) => {
    setDefaultCategory(categories[categoryKey])
  }

  return (
    <div className="min-h-screen p-8 lg:p-16 grid grid-cols-1 grid-rows-5 gap-4 h-full w-full lg:grid-cols-7 lg:grid-rows-3">
      <div className="hero lg:col-span-7 bg-mint">
        <Link href={`/products`}>
          <div className="hero-content text-center font-bold text-2xl font-mono text-black">
            All
          </div>
        </Link>
      </div>
      <div
        onClick={() => handleCategoryClick("0")}
        className="hero lg:col-span-5 lg:row-start-2 bg-tiffany-blue"
      >
        <Link href={`/products`}>
          {" "}
          <div className="hero-content text-center font-bold text-2xl font-mono text-black">
            {categories[0]}
            <Image
              src="/images/category_electronic.png"
              alt="Placeholder Image"
              width={200}
              height={100}
            />
          </div>
        </Link>{" "}
      </div>

      <div
        onClick={() => handleCategoryClick("1")}
        className="hero lg:col-span-2 lg:col-start-6 lg:row-start-2 bg-mint-green"
      >
        <Link href={`/products`}>
          <div className="hero-content text-center font-bold text-2xl font-mono text-black">
            <Image
              src="/images/category_jewelry.png"
              alt="Placeholder Image"
              width={200}
              height={100}
            />
            {categories[1]}
          </div>
        </Link>{" "}
      </div>

      <div
        onClick={() => handleCategoryClick("2")}
        className="hero lg:col-span-3 lg:row-start-3 bg-mint-cream"
      >
        <Link href={`/products`}>
          <div className="hero-content text-center font-bold text-2xl font-mono text-black">
            <Image
              src="/images/category_men_clothing.png"
              alt="Placeholder Image"
              width={200}
              height={100}
            />

            {categories[2]}
          </div>
        </Link>{" "}
      </div>

      <div
        onClick={() => handleCategoryClick("3")}
        className="hero lg:col-span-4 lg:col-start-4 lg:row-start-3 bg-zomp"
      >
        <Link href={`/products`}>
          {" "}
          <div className="hero-content text-center font-bold text-2xl font-mono text-black">
            {categories[3]}

            <Image
              src="/images/category_women_clothes.png"
              alt="Placeholder Image"
              width={200}
              height={200}
            />
          </div>
        </Link>
      </div>
    </div>
  )
}
