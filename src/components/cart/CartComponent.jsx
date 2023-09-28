import React, { useEffect, useState } from "react"
import { collection, addDoc } from "firebase/firestore"
import { db } from "@/util/firebase"
import { SINGLE_PRODUCT } from "@/constants/index"
import { API } from "@/util/API"

function CartComponent({ products }) {
  const [dataProduct, setDataProduct] = useState({})
  const cartCollectionRef = collection(db, "cart")

  //console.log("Cart Component", products);

  const addCart = async (e) => {
    e.preventDefault()
    setDataProduct({})
    await addDoc(cartCollectionRef, dataProduct)
  }

  return (
    <main className="h-full">
      <div className="w-500 h-full p-50 bg-orange-400 flex flex-col justify-center items-center rounded shadow-orange-800  ">
        <h1 className="text-white text-2xl py-5 font-bold">
          Add Data to Cart:
        </h1>
        <div className="flex">
          <p className="text-white text-xl px-20 py-3 bg-orange-950 opacity-80 rounded-sm mx-4">
            {" "}
          </p>
          <p className="text-white text-xl px-20 py-3 bg-orange-950 opacity-80 rounded-sm mx-4">
            {" "}
            Price{" "}
          </p>
          <p className="text-white text-xl px-20 py-3 bg-orange-950 opacity-80 rounded-sm mx-4">
            {" "}
            Category{" "}
          </p>
        </div>

        {/* <input 
          onChange={(e) =>setData({name : e.target.value})}
          type='text' 
          placeholder='Add a cart...' 
          className="text-black border border-gray-300 p-2 my-10 rounded-md focus:outline-none focus:border-orange-700"/> */}
        <button
          onClick={addCart}
          className="mb-50 bg-white hover:bg-orange-100 text-orange-700 font-semibold hover:text-orange-700 py-2 px-4 border border-orange-500 hover:border-transparent rounded"
        >
          Button
        </button>
      </div>
    </main>
  )
}
export default CartComponent

export async function getServerSideProps() {
  const data = await API(SINGLE_PRODUCT)
  console.log("First", data)
  return {
    props: {
      products: data,
    },
  }
}
