import React from "react"
import Image from "next/image"
export default function HeroGrid() {
  return (
    <div className="min-h-screen p-8 lg:p-16 grid grid-cols-1 grid-rows-5 gap-4 h-full w-full lg:grid-cols-7 lg:grid-rows-3">
      <div
        className="hero lg:col-span-7 bg-cover"
        style={{ backgroundImage: `url('/images/shop_now.jpg')` }}
      >
        <div className="hero-overlay bg-opacity-40 relative"></div>
        <div className="hero-content text-center text-neutral-content"></div>
      </div>
      <div
        className="hero col-span-5 row-start-2 bg-blue-200"
        style={{ backgroundImage: `url('/images/category_electronics.jpg')` }}
      >
        <div className="hero-overlay bg-opacity-40 relative"></div>
        <div className="hero-content text-center text-neutral-content"></div>
      </div>
      <div
        className="hero col-span-2 col-start-6 row-start-2 bg-yellow-200"
        style={{ backgroundImage: `url('/images/category_jewelery.jpg')` }}
      >
        <div className="hero-overlay bg-opacity-40 relative"></div>
        <div className="hero-content text-center text-neutral-content"></div>
      </div>
      <div
        className="hero col-span-3 row-start-3 bg-red-200"
        style={{ backgroundImage: `url('/images/category_women.jpg')` }}
      >
        <div className="hero-overlay bg-opacity-60 relative"></div>
        <div className="hero-content text-center text-neutral-content"></div>
      </div>
      <div
        className="hero col-span-4 col-start-4 row-start-3 bg-purple-200"
        style={{ backgroundImage: `url('/images/category_men.jpg')` }}
      >
        <div className="hero-overlay bg-opacity-60 relative"></div>
        <div className="hero-content text-center text-neutral-content"></div>
      </div>
    </div>
  )
  {
    /*<div className="grid grid-cols-1 grid-rows-5 lg:grid-rows-9 gap-4 lg:h-128 lg:w-128 lg:grid-cols-7">
  //   <div className="lg:col-span-7 lg:row-span-3 relative bg-green-200">
  //   <div className="absolute bottom-0 left-0 right-0 top-auto h-auto w-auto bg-gradient-to-t from-green-200 via-transparent to-transparent opacity-0 transition rounded-lg duration-300 ease-in-out hover:opacity-70">
  //      </div> 
  //      <Image
  //         className="lg:w-full lg:h-96 w-full h-full"
  //         src="/images/shop_now.jpg"
  //         alt="category_electronics"
  //         width={1000}
  //         height={1333}
  // />
  //   </div>

  //     <div className="lg:col-span-5 lg:row-span-3 lg:row-start-4 relative">
  //     <div className="absolute bottom-0 left-0 right-0 top-auto h-full w-full bg-gradient-to-t from-blue-200 via-transparent to-transparent opacity-0 transition rounded-lg duration-300 ease-in-out hover:opacity-70">
  //      </div> 
  //      <Image
  //         className="lg:w-full lg:h-96 w-full h-full"
  //         src="/images/category_electronics.jpg"
  //         alt="category_electronics"
  //         width={1000}
  //         height={667}
  //       />
  //     </div>
  //     <div className="lg:col-span-2 lg:row-span-3 lg:col-start-6 lg:row-start-4 relative">
  //     <div className="absolute bottom-0 left-0 right-0 top-auto h-full w-full bg-gradient-to-t from-yellow-200 via-transparent to-transparent opacity-0 transition rounded-lg duration-300 ease-in-out hover:opacity-70">
  //      </div> 
  //       <Image
  //         className="lg:h-96 lg:w-full w-full h-full"
  //         src="/images/category_jewelery.jpg"
  //         alt="Image"
  //         width={1000}
  //         height={800}
  //       />
  //     </div>
  //     <div className="lg:col-span-3 lg:row-span-3 lg:row-start-7  relative">
  //     <div className="absolute bottom-0 left-0 right-0 top-auto h-full w-full bg-gradient-to-t from-red-200 via-transparent to-transparent opacity-0 transition rounded-lg duration-300 ease-in-out hover:opacity-70">
  //     </div> 
  //       <Image
  //         className="lg:w-full lg:h-96 w-full h-full"
  //         src="/images/category_women.jpg"
  //         alt="Image"
  //         width={1000}
  //         height={667}
  //       />
  //     </div>
  //     <div className="lg:col-span-4 lg:row-span-3 lg:col-start-4 lg:row-start-7 relative">
  //     <div className="absolute bottom-0 left-0 right-0 top-auto h-full w-full bg-gradient-to-t from-purple-200 via-transparent to-transparent opacity-0 transition rounded-lg duration-300 ease-in-out hover:opacity-70">
  //      </div> 
  //       <Image
  //         className="lg:w-full lg:h-96 w-full h-full"
  //         src="/images/category_men.jpg"
  //         alt="Image"
  //         width={1000}
  //         height={667}
  //       />
  //     </div>
  //   </div>*/
  }
}
