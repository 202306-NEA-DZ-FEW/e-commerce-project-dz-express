import { API } from "@/util/API"
import { ALL_PRODUCTS } from "@/constants"
import HeroGrid from "@/components/Hero Grid/HeroGrid"
import ProductListCard from "@/components/ProductCardList/ProductListCard"

export default function Home({ products }) {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroGrid />
      <h1>Jewelery</h1>
      <ProductListCard products={products} />
      <h1>Jewelery</h1>
      <ProductListCard products={products} />
    </main>
  )
}

export async function getStaticProps() {
  const data = await API(ALL_PRODUCTS)
  const products = data.map((product) => product.category === "jewelery")
  return {
    props: {
      products: products.slice(0, 3),
    },
  }
}
