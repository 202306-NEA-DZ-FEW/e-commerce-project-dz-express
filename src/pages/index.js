import Image from "next/image"
import { API } from "@/util/API"
import { CATEGORIES } from "@/constants"

export default function Home({ products }) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      {JSON.stringify(products)}
    </main>
  )
}

export async function getStaticProps() {
  const data = await API(CATEGORIES)
  return {
    props: {
      products: data,
    },
  }
}
