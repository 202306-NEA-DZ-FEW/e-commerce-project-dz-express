import { PiShoppingCart } from "react-icons/pi"
import { FiSearch } from "react-icons/fi"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Logo from "./Logo"
import MobileMenu from "./MobileMenu"
import { useCategory } from "@/context/CategoryContext"
import { ALL_PRODUCTS } from "@/constants"
import { API } from "@/util/API"
import Image from "next/image"

const Nav = () => {
  const { defaultCategory, setDefaultCategory } = useCategory()
  const [showInput, setShowInput] = useState(false)
  const inputRef = useRef()
  const [searchList, setSearchList] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [products, setProducts] = useState([]) // Store all products
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ]

  const handleCategoryClick = (categoryKey) => {
    setDefaultCategory(categories[categoryKey])
  }
  // Fetch all products when the component mounts
  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await API(ALL_PRODUCTS)
        setProducts(data)
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }

    fetchProducts()
  }, [])

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase()
    setSearchInput(query)

    if (!query) {
      setSearchList([]) // Clear the search results when the query is empty
      return
    }

    const filtered = products
      .filter((product) => product.title.toLowerCase().includes(query))
      .slice(0, 4)
    setSearchList(filtered)
  }

  function handleToggleInput() {
    setShowInput((prevState) => !prevState)
  }

  // Clear the search results when an item is clicked
  const handleItemClick = () => {
    setSearchList([])
  }

  useEffect(() => {
    if (!showInput) return
    inputRef.current.focus()
  }, [showInput])

  return (
    <nav className="navbar mb-2 bg-gradient-to-b sticky top-0 z-50 backdrop-blur-md">
      <MobileMenu />
      <div
        onClick={() => setDefaultCategory("")}
        className="px-2 mx-2 flex-1 gap-2 justify-center lg:justify-start"
      >
        <Logo className="text-center" />
      </div>
      <div className="lg:flex-1 px-2 mx-2 justify-center">
        <div
          onClick={() => setDefaultCategory("")}
          className="items-stretch hidden lg:flex lg:space-x-4"
        >
          <Link href="/" className="btn btn-ghost btn-sm rounded-btn">
            Home
          </Link>
          <Link
            onClick={() => setDefaultCategory("")}
            href="/products"
            className="btn btn-ghost btn-sm rounded-btn"
          >
            Products
          </Link>
          <div className="dropdown dropdown-hover">
            <label tabIndex={0}>categories</label>

            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 w-52"
            >
              <Link href={`/products`}>
                <li
                  onClick={() => setDefaultCategory(categories[0])}
                  className="block p-4 border-spacing-1 hover:bg-slate-300"
                >
                  {categories[0]}
                </li>
              </Link>
              <Link href={`/products`}>
                <li
                  onClick={() => setDefaultCategory(categories[1])}
                  className="block p-4 border-spacing-1 hover:bg-slate-300"
                >
                  {categories[1]}
                </li>
              </Link>
              <Link href={`/products`}>
                <li
                  onClick={() => setDefaultCategory(categories[2])}
                  className="block p-4 border-spacing-1 hover:bg-slate-300"
                >
                  {categories[2]}
                </li>
              </Link>
              <Link href={`/products`}>
                <li
                  onClick={() => setDefaultCategory(categories[3])}
                  className="block p-4 border-spacing-1 hover:bg-slate-300"
                >
                  {categories[3]}
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-1 justify-end">
        <div className="form-control">
          <div className="relative flex flex-row gap-1 items-center bg-white rounded-lg p-2">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search..."
              className={`w-44 box-border px-4 py-[3px] rounded-lg bg-white input input-ghost input-sm transition-all duration-300 ${
                showInput ? "block" : "hidden"
              }`}
              value={searchInput}
              onChange={handleSearch}
              style={{ color: "black" }}
            />

            <FiSearch
              onClick={handleToggleInput}
              className="text-2xl bg-white"
            />

            {searchList.length > 0 && (
              <div className="absolute top-full w-96 right-0 bg-white rounded-lg">
                <div className="flex flex-col gap-2">
                  {searchList.map((product) => (
                    <Link
                      href={`/products/${product.id}`}
                      key={product.id}
                      className="flex flex-row justify-between items-center p-3  gap-2 hover:bg-white rounded-lg"
                      onClick={() => setSearchList([])} // Clear search results when an item is clicked
                    >
                      <div className="flex flex-row gap-4">
                        <Image
                          src={product.image} // Replace with the actual image URL
                          alt={product.title}
                          width={500}
                          height={500}
                          className="w-16 rounded-lg"
                        />
                        <p className="text-lg font-semibold">{product.title}</p>
                      </div>
                      {/* You can add more information here */}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <Link href="/cart">
          <button className="btn btn-square btn-ghost">
            <PiShoppingCart className="text-2xl" />
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default Nav
