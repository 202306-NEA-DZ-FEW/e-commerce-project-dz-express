import React, { useState, useEffect } from "react"
import ProductListCard from "@/components/ProductCardList/ProductListCard"
import { ALL_PRODUCTS, CATEGORIES } from "@/constants"
import { API } from "@/util/API"
import Filter from "@/components/filter/Filter"
import { useCategory } from "@/context/CategoryContext"

const Products = ({ products, categories }) => {
  const [filteredData, setFilteredData] = useState(products) // Initialize with all products
  const { defaultCategory, setDefaultCategory } = useCategory()

  function filterItemsByCategory(category) {
    const filteredItems = products.filter((item) => item.category === category)
    setFilteredData(filteredItems)
  }

  function filterItemsByPriceRange(fromPrice, toPrice) {
    const filteredItems = filteredData.filter((item) => {
      if (fromPrice && toPrice) {
        return item.price >= fromPrice && item.price <= toPrice
      } else if (fromPrice) {
        return item.price >= fromPrice
      } else if (toPrice) {
        return item.price <= toPrice
      }
      return true
    })
    setFilteredData(filteredItems)
  }

  function filterItemsByRating(minRating) {
    const filteredItems = filteredData.filter(
      (item) => Math.floor(item.rating.rate) === minRating,
    )
    setFilteredData(filteredItems)
  }

  function resetFilters() {
    setFilteredData(products)
  }

  useEffect(() => {
    // Filter products based on defaultCategory if it is specified
    if (defaultCategory) {
      filterItemsByCategory(defaultCategory)
    }
  }, [])

  return (
    <div>
      <div className="relative z-10">
        <Filter
          categories={categories}
          filterItemsByRating={filterItemsByRating}
          filterItemsByCategory={filterItemsByCategory}
          filterItemsByPriceRange={filterItemsByPriceRange}
          resetFilters={resetFilters}
        />
      </div>
      <div className="relative z-0">
        <ProductListCard products={filteredData} />
      </div>
    </div>
  )
}

export default Products

export async function getStaticProps() {
  const data = await API(ALL_PRODUCTS)
  const categories = await API(CATEGORIES)
  // const updatedCategories = {
  //   '4': 'All', // Add an "All" category option
  //   ...categories,
  // };
  //  console.log('updatedCategories', updatedCategories)
  return {
    props: {
      products: data,
      categories: categories,
    },
  }
}
