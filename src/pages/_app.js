import Layout from "@/components/Layout"
import "@/styles/globals.css"
import { CategoryProvider } from "../context/CategoryContext"
import { CartProvider } from "../context/CartContext"

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <CategoryProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CategoryProvider>
    </CartProvider>
  )
}
