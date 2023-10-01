import CartComponent from "@/components/cart/CartComponent"
import { API } from "@/util/API"
import { ALL_PRODUCTS } from "@/constants"
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth"
import { collection, addDoc, getDocs } from "firebase/firestore"
import { db } from "@/util/firebase"
import { useEffect, useState } from "react"

function Cart({ products }) {
  const [cartItems, setCartItems] = useState([])
  const updateCart = async () => {
    const querySnapshot = await getDocs(collection(db, "cart"))
    const updatedCartItems = []
    querySnapshot.forEach((doc) => {
      updatedCartItems.push({
        id: doc.id,
        data: doc.data(),
      })
    })
    setCartItems(updatedCartItems)
  }
  useEffect(() => {
    updateCart() // Fetch updated cart items
  }, [])
  return (
    <div className="h-full -z-1">
      <CartComponent products={products} cartItems={cartItems} />
    </div>
  )
}

export default Cart

export async function getServerSideProps() {
  const querySnapshot = await getDocs(collection(db, "cart"))
  const products = []
  querySnapshot.forEach((doc) => {
    products.push({
      id: doc.id,
      data: doc.data(),
    })
  })
  console.log("products", products)
  return {
    props: {
      products,
    },
  }
}
