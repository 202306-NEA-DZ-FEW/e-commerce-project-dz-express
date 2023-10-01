import React, { useState } from "react"
import { API } from "@/util/API"
import { SINGLE_PRODUCT } from "@/constants"
import Image from "next/image"

const ShoppingCart = ({ products }) => {
  // Define the quantity state and initialize it to 1
  const [quantity, setQuantity] = useState(1)

  // Calculate subtotal, taxes, and total based on productPrice and quantity
  const subtotal = products.price * quantity
  const taxes = subtotal * 0.19 // Assuming 19% tax
  const total = subtotal + taxes

  // Function to increment quantity
  const incrementQuantity = () => {
    setQuantity(quantity + 1)
  }

  // Function to decrement quantity
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className="bg-gray-100 h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-semibold">Product</th>
                    <th className="text-left font-semibold">Price</th>
                    <th className="text-left font-semibold">Quantity</th>
                    <th className="text-left font-semibold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-4">
                      <div className="flex items-center">
                        <Image
                          className="h-16 w-16 mr-4"
                          src={products.image}
                          alt="Product image"
                          width={100}
                          height={100}
                        />

                        <span className="font-semibold">{products.title}</span>
                      </div>
                    </td>
                    <td className="py-4">${products.price.toFixed(2)}</td>
                    <td className="py-4">
                      <div className="flex items-center">
                        <button
                          onClick={decrementQuantity}
                          className="border rounded-md py-2 px-4 mr-2"
                        >
                          -
                        </button>
                        <span className="text-center w-8">{quantity}</span>
                        <button
                          onClick={incrementQuantity}
                          className="border rounded-md py-2 px-4 ml-2"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-4">${subtotal.toFixed(2)}</td>
                  </tr>
                  {/* More product rows */}
                </tbody>
              </table>
            </div>
          </div>
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Taxes</span>
                <span>${taxes.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>$0.00</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">${total.toFixed(2)}</span>
              </div>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart

export async function getServerSideProps() {
  const data = await API(SINGLE_PRODUCT)

  return {
    props: {
      products: data,
    },
  }
}
