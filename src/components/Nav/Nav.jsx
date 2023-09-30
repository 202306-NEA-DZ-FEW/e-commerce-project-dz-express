import { PiShoppingCart } from "react-icons/pi"
import { FiSearch } from "react-icons/fi"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Logo from "./Logo"
import MobileMenu from "./MobileMenu"
import { ALL_PRODUCTS } from "@/constants"
import { useRouter } from "next/router"

function Nav() {
  const [showInput, setShowInput] = useState(false)
  const inputRef = useRef()

  function handleToggleInput() {
    setShowInput((prevState) => !prevState)
  }
  useEffect(() => {
    if (!showInput) return
    inputRef.current.focus()
  }, [showInput])
  return (
    <navbar className="navbar   bg-gradient-to-b  sticky top-0 z-50 backdrop-blur-md">
      <MobileMenu />
      <div className="lg:px-2 mx-2 flex-1 gap-2 justify-end lg:justify-start">
        <Logo className="text-center" />
      </div>
      <div className="lg:flex-1 px-2 mx-2 justify-center">
        <div className="items-stretch hidden lg:flex lg:space-x-4">
          <Link href="/" className="btn btn-ghost btn-sm rounded-btn">
            Home
          </Link>
          <Link href="/products" className="btn btn-ghost btn-sm rounded-btn">
            All Products
          </Link>
          <Link
            href="/Categories"
            className="btn btn-ghost btn-sm rounded-btn "
          >
            <div className="dropdown dropdown-hover">
              <label tabIndex={0} className="">
                categories
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100  w-52  "
              >
                <li className="block p-4 border-spacing-1 hover:bg-slate-300">
                  MEN CLOTHING
                </li>
                <li className="block p-4 border-spacing-1 hover:bg-slate-300">
                  WOMEN CLOTHING
                </li>
                <li className="block p-4 border-spacing-1 hover:bg-slate-300">
                  ELECTRONICS
                </li>
                <li className="block p-4 border-spacing-1 hover:bg-slate-300">
                  JEWELRY
                </li>
              </ul>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex-1 justify-end">
        <div className="form-control">
          <form>
            <input
              ref={inputRef}
              type="text"
              placeholder="You are shopping for..."
              className={`input input-ghost input-sm transition-all duration-300 ${
                showInput ? "block" : "hidden"
              }`}
            />
          </form>
        </div>
        <button
          onClick={handleToggleInput}
          className="btn btn-square btn-ghost "
        >
          <FiSearch className="text-2xl" />
        </button>
        <Link href={"/cart"}>
          <button className="btn btn-square btn-ghost">
            <PiShoppingCart className="text-2xl" />
          </button>
        </Link>
      </div>
    </navbar>
  )
}

export default Nav
export async function getStaticProps() {
  const data = await API(ALL_PRODUCTS)
  return {
    props: {
      products: data,
    },
  }
}
