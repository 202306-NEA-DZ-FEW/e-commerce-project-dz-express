import { API } from "@/util/API"
import { ALL_CART } from "@/constants"

export default function Home({ products }) {
  return <main className="flex flex-col min-h-screen"></main>
}

// export async function getStaticProps() {
//   const data = await API(ALL_CART)
//   return {
//     props: {
//       products: data,
//     },
//   }
// }
