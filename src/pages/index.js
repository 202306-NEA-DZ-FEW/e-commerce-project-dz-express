import { API } from "@/util/API"
import { ALL_PRODUCTS, CATEGORIES, SINGLE_PRODUCT } from "@/constants"
import ProductCard from "@/components/ProductCard/ProductCard"
import HeroGrid from "@/components/Hero Grid/HeroGrid"

export default function Home({ categories, categoryObjects }) {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <HeroGrid {...categories} />

      <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
        {categoryObjects.map((categoryObj) => (
          <div key={categoryObj.category} className="col-span-4">
            <div className="mb-8 backdrop-blur py-2 px-4 text-white font-mono uppercase bg-gradient-to-r from-emerald-700 to-white">
              <h2 className="text-2xl font-bold">{categoryObj.category}</h2>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {categoryObj.products.map((product) => (
                <div key={product.id} className="col-span-1">
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
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
    const limitedProducts = matchingProducts.slice(0, 3)

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
