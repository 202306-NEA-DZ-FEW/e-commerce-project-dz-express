import { PiShoppingCart } from "react-icons/pi"
import { FiMenu, FiSearch } from "react-icons/fi"
import { AiOutlineClose } from "react-icons/ai"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Logo from "./Logo"

function Nav() {
  const [showInput, setShowInput] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const inputRef = useRef()

  function handleToggleInput() {
    setShowInput((prevState) => !prevState)
  }
  function handleOpenMenu() {
    setShowMenu(true)
  }
  function handleCloseMenu() {
    setShowMenu(false)
  }

  useEffect(() => {
    if (!showInput) return
    inputRef.current.focus()
  }, [showInput])

  return (
    <div className="navbar mb-2  bg-gradient-to-b  sticky top-0 z-50 backdrop-blur-md">
      <div
        className={`${
          showMenu ? "block" : "hidden"
        } flex flex-col gap-10 justify-center absolute h-[100vh] w-[100%] overflow-x-hidden top-0 right-0 bg-neutral text-neutral-content`}
      >
        <div className="w-full text-center">
          <button onClick={handleCloseMenu} className="btn btn-ghost btn-sm">
            <AiOutlineClose className="text-2xl" />
          </button>
        </div>
        <Link href="/" className="btn btn-ghost btn-sm p-10">
          Home
        </Link>
        <hr className=" bg-neutral-content w-full" />
        <Link href="/products" className="btn btn-ghost btn-sm p-10">
          All Products
        </Link>
        <hr className=" bg-neutral-content w-full" />
        <Link href="/about" className="btn btn-ghost btn-sm p-10">
          About
        </Link>
        <hr className=" bg-neutral-content w-full" />
      </div>
      <div className="px-2 mx-2 lg:hidden flex-1 gap-2 ">
        <button
          onClick={handleOpenMenu}
          className="btn btn-ghost btn-sm btn-square "
        >
          <FiMenu className="text-2xl" />
        </button>
      </div>
      <div className="px-2 mx-2 flex-1 gap-2 justify-center lg:justify-start">
        <Logo />
      </div>
      <div className="lg:flex-1 px-2 mx-2 justify-center">
        <div className="items-stretch hidden lg:flex">
          <Link href="/" className="btn btn-ghost btn-sm rounded-btn">
            Home
          </Link>
          <Link href="/products" className="btn btn-ghost btn-sm rounded-btn">
            All Products
          </Link>
          <Link href="/about" className="btn btn-ghost btn-sm rounded-btn">
            About
          </Link>
        </div>
      </div>
      <div className="flex-1 justify-end">
        <div className="form-control">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search"
            className={`input input-ghost input-sm transition-all duration-300 ${
              showInput ? "block" : "hidden"
            }`}
          />
        </div>
        <button
          onClick={handleToggleInput}
          className="btn btn-square btn-ghost"
        >
          <FiSearch className="text-2xl" />
        </button>
        <button className="btn btn-square btn-ghost">
          <PiShoppingCart className="text-2xl" />
        </button>
      </div>
    </div>
  )
}

export default Nav
