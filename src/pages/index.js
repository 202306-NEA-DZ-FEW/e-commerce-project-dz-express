import { API } from "@/util/API"
import { ALL_PRODUCTS, CATEGORIES, SINGLE_PRODUCT } from "@/constants"
import ProductCard from "@/components/ProductCard/ProductCard"
import HeroGrid from "@/components/Hero Grid/HeroGrid"
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import Link from "next/link"

export default function Home({ categories, categoryObjects }) {
  useEffect(() => {
    const auth = getAuth()
    signInAnonymously(auth)
      .then(() => {
        console.log("hey")
      })
      .catch((error) => {
        console.error("Anonymous sign-in error:", error)
      })
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        console.log("user", user.uid)
      } else {
      }
    })
  }, [])
  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <HeroGrid {...categories} />

      <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
        {categoryObjects.map((categoryObj) => (
          <div key={categoryObj.category} className="col-span-4">
            <div className="w-full p-3 my-5 h-14 bg-gradient-to-r from-emerald-700 to-white text-white uppercase font-mono ">
              <h2 className="text-2xl font-bold">{categoryObj.category}</h2>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {categoryObj.products.map((product) => (
                <div key={product.id} className="col-span-1">
                  <Link href={`/products/${product.id}`}>
                    <ProductCard {...product} />
                  </Link>
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
