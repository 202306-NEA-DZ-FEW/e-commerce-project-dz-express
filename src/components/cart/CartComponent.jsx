import React, { useEffect, useState } from "react"
import Image from "next/image"
import { useCart } from "@/context/CartContext"
import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore"
import { db } from "@/util/firebase"

const CartComponent = ({ products }) => {
  const [productsArray, setProductsArray] = useState(products)
  const [quantity, setQuantity] = useState(0)
  const [subtotal, setSubtotal] = useState(0)
  const [taxes, setTaxes] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    // Calculate subtotal
    const newSubtotal = productsArray.reduce(
      (acc, item) => acc + item.data.product.price * item.data.quantity,
      0,
    )
    // Calculate taxes
    const newTaxes = newSubtotal * 0.19

    // Calculate total
    const newTotal = newSubtotal + newTaxes

    // Update state variables
    setSubtotal(newSubtotal)
    setTaxes(newTaxes)
    setTotal(newTotal)
  }, [productsArray])
  const incrementQuantity = (quantity) => {
    quantity++
  }

  const decrementQuantity = (quantity) => {
    if (quantity > 1) {
      quantity--
    }
  }
  const removeCartItem = (id) => {
    const updatedProducts = productsArray.filter((product) => {
      console.log(product.data.product.id, "id", id)
      return product.data.product.id !== id
    })
    setProductsArray(updatedProducts)
  }

  const handleDeleteCartItem = async (id) => {
    console.log("id", id)
    const q = query(collection(db, "cart"), where("product.id", "==", id))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach(async (document) => {
      // Use deleteDoc correctly with the db object, collection name, and document ID
      await deleteDoc(doc(db, "cart", document.id))
    })
  }

  const handleCheckout = async () => {
    const querySnapshot = await getDocs(collection(db, "cart"))
    querySnapshot.forEach(async (document) => {
      await deleteDoc(doc(db, "cart", document.id))
    })
    setProductsArray([])
  }
  return (
    <div className="bg-gray-100 h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
        <div className="flex ">
          <div className="flex flex-col w-full gap-4">
            {productsArray.map((product) => (
              <div key={product.data.product.id} className="md:w-3/4">
                <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="text-left font-semibold">Product</th>
                        <th className="text-left font-semibold">Price</th>
                        <th className="text-left font-semibold">Quantity</th>
                        <th className="text-left font-semibold">Total</th>
                        <th>
                          <button
                            onClick={() => {
                              handleDeleteCartItem(product.data.product.id)
                              removeCartItem(product.data.product.id)
                            }}
                            className="text-black-500 p-2 text-bold"
                          >
                            X
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-4">
                          <div className="flex items-center">
                            <Image
                              className="h-16 w-16 mr-4"
                              src={product.data.product.image}
                              alt="Product image"
                              width={100}
                              height={100}
                            />

                            <span className="font-semibold">
                              {product.title}
                            </span>
                          </div>
                        </td>
                        <td className="py-4">
                          ${product.data.product.price.toFixed(2)}
                        </td>
                        <td className="py-4">
                          <span className="text-center w-8">
                            {product.data.quantity}
                          </span>{" "}
                        </td>
                        {/*  //   <div className="flex items-center">
                        //     <button
                        //       onClick={() =>
                        //         decrementQuantity(product.data.quantity)
                        //       }
                        //       className="border rounded-md py-2 px-4 mr-2"
                        //     >
                        //       -
                        //     </button>
                        //     
                        //     <button
                        //       onClick={() =>
                        //         incrementQuantity(product.data.quantity)
                        //       }
                        //       className="border rounded-md py-2 px-4 ml-2"
                        //     >
                        //       +
                        //     </button>
                        //   </div>
                          // </td>*/}
                        <td>
                          $
                          {product.data.quantity *
                            product.data.product.price.toFixed(2)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
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
              <button
                onClick={handleCheckout}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartComponent
