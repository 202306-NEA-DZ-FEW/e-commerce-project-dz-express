import Layout from "@/components/Layout"
import "@/styles/globals.css"
import { RxSwitch } from "react-icons/rx"
import { CategoryProvider } from "../context/CategoryContext"
import { CartProvider } from "../context/CartContext"
import { createContext, useState } from "react"

export const ThemeContext = createContext(null)

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("dark")
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
    console.log("clicked")
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <button
          onClick={toggleTheme}
          checked={theme === "dark"}
          className="btn btn-square btn-ghost"
        >
          <RxSwitch className="text-2xl" />
        </button>
        <CartProvider>
          <CategoryProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </CategoryProvider>
        </CartProvider>
        <div></div>
      </div>
    </ThemeContext.Provider>
  )
}
