import React from "react"
import ProductListCard from "@/components/ProductCardList/ProductListCard"
import { ALL_PRODUCTS, CATEGORIES } from "@/constants"
import { API } from "@/util/API"
import Filter from "@/components/filter/Filter"
const Products = ({ products, categories }) => {
  return (
    <div>
      <div className="relative z-10">
        <Filter categories={categories} />
      </div>
      <div className="relative z-0">
        <ProductListCard products={products} />
      </div>
    </div>
  )
}
export default Products

export async function getStaticProps() {
  const data = await API(ALL_PRODUCTS)
  const categories = await API(CATEGORIES)

  return {
    props: {
      products: data,
      categories: categories,
    },
  }
}
