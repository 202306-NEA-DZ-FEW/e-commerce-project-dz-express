import { SINGLE_PRODUCT } from "@/constants"
import { useCart } from "@/context/CartContext"
import { API } from "@/util/API"
import { React, useState } from "react"
import { collection, addDoc } from "firebase/firestore"
import { db } from "@/util/firebase"
import Image from "next/image"

const SingleProduct = ({ product }) => {
  const cartCollectionRef = collection(db, "cart")
  const { cart, setCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const incrementQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const handleAddToCart = async () => {
    const updatedCart = [...cart, { product, quantity }]
    setCart(updatedCart)
    console.log("Updated Cart:", updatedCart)
    await addDoc(cartCollectionRef, { product, quantity })
  }

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="flex-1 px-4 h-[460px] rounded-lg bg-white mb-4">
            <Image
              className="w-full h-full object-scale-down"
              src={product.image}
              alt="Product Image"
              height={500}
              width={500}
            />
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.title}
            </h1>
            <div className="flex mb-4">
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
                <span className="text-gray-600 ml-3">
                  {product.rating.count} Reviews
                </span>
              </span>
            </div>
            <p className="leading-relaxed">{product.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <div className="flex items-center">
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
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${product.price}
              </span>
              <button
                onClick={handleAddToCart}
                className="flex ml-auto text-white bg-emerald-400 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleProduct

export async function getServerSideProps({ params }) {
  const link = `${SINGLE_PRODUCT}${params.productId}`
  const data = await API(link)
  return {
    props: {
      product: data,
    },
  }
}
