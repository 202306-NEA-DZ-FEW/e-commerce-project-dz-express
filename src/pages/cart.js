import React from "react"
import CartComponent from "@/components/cart/CartComponent"
import { API } from "@/util/API"
import { ALL_PRODUCTS } from "@/constants"
function Cart({ products }) {
  return (
    <main>
      <CartComponent data={products} />
    </main>
  )
}

export default Cart
export async function getServerSideProps() {
  const data = await API(ALL_PRODUCTS)

  return {
    props: {
      products: data,
    },
  }
}
