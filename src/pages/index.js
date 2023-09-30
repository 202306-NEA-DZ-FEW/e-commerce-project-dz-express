import { API } from "@/util/API"
import { ALL_PRODUCTS, CATEGORIES, SINGLE_PRODUCT } from "@/constants"
import ProductCard from "@/components/ProductCard/ProductCard"
import HeroGrid from "@/components/Hero Grid/HeroGrid"

export default function Home({ categories, categoryObjects }) {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroGrid {...categories} />
      <div className="grid grid-cols-4 gap-4">
        {categoryObjects.map((categoryObj) => (
          <div key={categoryObj.category} className="col-span-4">
            <h2 className="text-xl font-bold">{categoryObj.category}</h2>
            <div className="grid grid-cols-3 gap-4"></div>
          </div>
        ))}
      </div>
    </main>
  )
}

export async function getStaticProps() {
  const products = await API(ALL_PRODUCTS)
  const categories = await API(CATEGORIES)
  const categoryObjects = categories.map((category) => {
    const matchingProducts = products.filter(
      (product) => product.category === category,
    )
    const limitedProducts = matchingProducts.slice(0, 3) // Get the first 3 matching products

    return {
      category: category,
      products: limitedProducts,
    }
  })
  return {
    props: {
      categories: categories,
      categoryObjects: categoryObjects,
    },
  }
}
