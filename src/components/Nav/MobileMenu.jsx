import React from "react"
import { useState } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { FiMenu } from "react-icons/fi"
import Link from "next/link"
const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false)
  function handleOpenMenu() {
    setShowMenu(true)
  }
  function handleCloseMenu() {
    setShowMenu(false)
  }
  return (
    <div>
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
        <Link href="/categories" className="btn btn-ghost btn-sm p-10">
          categories
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
    </div>
  )
}

export default MobileMenu
