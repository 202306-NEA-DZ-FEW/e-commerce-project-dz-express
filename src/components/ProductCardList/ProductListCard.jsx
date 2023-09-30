import React from "react"
import Link from "next/link"
import ProductCard from "../ProductCard/ProductCard"

function ProductListCard({ products }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 justify-center items-center">
      {products.map((product, index) => {
        ;<Link key={index} href={`/product/${product.id}`}>
          <ProductCard id={index} {...product} />
        </Link>
      })}
    </div>
  )
}

export default ProductListCard
