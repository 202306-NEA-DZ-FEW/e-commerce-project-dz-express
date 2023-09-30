import React from "react"
import ProductListCard from "@/components/ProductCardList/ProductListCard"
import { ALL_PRODUCTS } from "@/constants"
import { API } from "@/util/API"
const Products = ({ products }) => {
  return (
    <div>
      <ProductListCard products={products} />
    </div>
  )
}

export default Products

export async function getServerSideProps() {
  const data = await API(ALL_PRODUCTS)

  return {
    props: {
      products: data,
    },
  }
}
