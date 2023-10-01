import Image from "next/image"
import { useState, useEffect } from "react"
import { useCart } from "@/context/CartContext"
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth"
import { collection, addDoc } from "firebase/firestore"
import { db } from "@/util/firebase"
import Link from "next/link"

function ProductCard(product) {
  const { cart, setCart } = useCart()
  const cartCollectionRef = collection(db, "cart")
  const quantity = 1
  const handleAddToCart = async () => {
    const updatedCart = [...cart, { product, quantity }]
    setCart(updatedCart)
    console.log("Updated Cart:", updatedCart)
    await addDoc(cartCollectionRef, { product, quantity })
  }
  return (
    <div className="text-center transform duration-500 hover:-translate-y-2 cursor-pointer w-full mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow-green-200 mb-4">
      <div className="p-8 rounded-t-lg max-w-64 w-auto mx-auto">
        <div className="w-full h-48 flex items-center justify-center">
          <Image
            src={product.image}
            alt="Product"
            width={100} // Adjust the width to maintain the aspect ratio
            height={100} // Adjust the height to maintain the aspect ratio
          />
        </div>
      </div>
      <div
        className="px-5 pb-5 flex flex-col justify-between bg-white"
        style={{
          maxHeight: "300px", // Adjust this height to limit the card height
          overflow: "hidden",
        }}
      >
        <h3 className="text-gray-900 font-semibold text-l tracking-tight dark:text-gray-900 overflow-hidden truncate">
          {product.title}
        </h3>
        <div className="flex mb-4 mt-4 justify-center">
          <span className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                fill={
                  index < Math.floor(product.rating.rate)
                    ? "currentColor"
                    : "none"
                }
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className={`w-4 h-4 ${
                  index < Math.floor(product.rating.rate) ||
                  (index === Math.floor(product.rating.rate) &&
                    product.rating.rate % 1 > 0)
                    ? "text-emerald-400"
                    : "text-emerald-400"
                }`}
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </span>
        </div>

        <h2 className="font-semibold mb-5">${product.price}</h2>

        <button
          onClick={handleAddToCart}
          className={`p-2 px-6 bg-emerald-500 text-white rounded-md hover:bg-emerald-600`}
        >
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
