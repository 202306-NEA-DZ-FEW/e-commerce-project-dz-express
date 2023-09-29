import { API } from "@/util/API"
import { ALL_CART } from "@/constants"
import Layout from "@/components/Layout"

export default function Home({ products }) {
  return (
    <main className="flex flex-col min-h-screen">
      <Layout />
    </main>
  )
}

// export async function getStaticProps() {
//   const data = await API(ALL_CART)
//   return {
//     props: {
//       products: data,
//     },
//   }
// }
