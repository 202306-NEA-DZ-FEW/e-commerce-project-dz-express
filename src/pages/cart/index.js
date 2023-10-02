import CartComponent from "@/components/cart/CartComponent"
import { API } from "@/util/API"
import { ALL_PRODUCTS } from "@/constants"
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth"
import { collection, addDoc, getDocs } from "firebase/firestore"
import { db } from "@/util/firebase"
import { useEffect, useState } from "react"
import { useCart } from "@/context/CartContext"

function Cart({ products }) {
  const { cart, setCart } = useCart()
  const [cartItems, setCartItems] = useState([])
  useEffect(() => {
    // Fetch cart items and update the state
    const fetchCartItems = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "cart"))
        const products = []

        querySnapshot.forEach((doc) => {
          const item = {
            id: doc.id,
            data: doc.data(),
          }
          const existingItemIndex = products.findIndex(
            (product) => product.id === item.id,
          )

          if (existingItemIndex !== -1) {
            products[existingItemIndex].data.quantity += item.data.quantity
          } else {
            products.push(item)
          }
        })

        setCartItems(products)
      } catch (error) {
        console.error("Error fetching cart items:", error)
      }
    }

    fetchCartItems()
  }, [cart])
  return (
    <div className="h-full -z-1">
      <CartComponent products={products} />
    </div>
  )
}

export default Cart

export async function getServerSideProps() {
  const querySnapshot = await getDocs(collection(db, "cart"))
  const products = []
  querySnapshot.forEach((doc) => {
    const item = {
      id: doc.id,
      data: doc.data(),
    }
    const existingItemIndex = products.findIndex(
      (product) => product.data.product.id === item.data.product.id,
    )

    if (existingItemIndex !== -1) {
      products[existingItemIndex].data.quantity += item.data.quantity
    } else {
      products.push(item)
    }
  })

  return {
    props: {
      products,
    },
  }
}
