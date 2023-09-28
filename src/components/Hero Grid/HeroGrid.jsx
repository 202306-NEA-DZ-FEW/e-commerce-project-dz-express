import React from "react"
import Image from "next/image"
export default function HeroGrid() {
  return (
    <div className="grid grid-cols-7 grid-rows-6 gap-4 h-128 w-128">
      <div className="col-span-5 row-span-3">
        <Image
          className="w-full h-96 "
          src="/images/category_electronics.jpg"
          alt="category_electronics.jpg"
          width={1000}
          height={667}
        />
      </div>
      <div className="col-span-2 row-span-3 col-start-6">
        <Image
          className="h-96 w-full"
          src="/images/category_jewelery.jpg"
          alt="Image"
          width={1000}
          height={800}
        />
      </div>
      <div className="col-span-3 row-span-3 row-start-4">
        {/* <div className='bg-[#e9e9e8] h-full w-12'></div>*/}
        <Image
          className="w-full h-96"
          src="/images/category_women.jpg"
          alt="Image"
          width={1000}
          height={667}
        />
      </div>
      <div className="col-span-4 row-span-3 col-start-4 row-start-4">
        <Image
          className="w-full h-96"
          src="/images/category_men.jpg"
          alt="Image"
          width={1000}
          height={667}
        />
      </div>
    </div>
  )
}
