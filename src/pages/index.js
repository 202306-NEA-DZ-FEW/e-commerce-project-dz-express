import { API } from "@/util/API"
import { SINGLE_PRODUCT } from "@/constants"
import ProductCard from "@/components/ProductCard/ProductCard"
import HeroGrid from "@/components/Hero Grid/HeroGrid"

export default function Home({ products }) {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroGrid />
      <ProductCard
        id={products.id}
        title={products.title}
        price={products.price}
        description={products.description}
        category={products.category}
        image={products.image}
        rating={products.rating.rate}
        count={products.rating.count}
      />
    </main>
  )
}

export async function getStaticProps() {
  const data = await API(SINGLE_PRODUCT)
  return {
    props: {
      products: data,
    },
  }
}
