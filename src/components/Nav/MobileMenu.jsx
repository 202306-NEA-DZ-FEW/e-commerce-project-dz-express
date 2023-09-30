import React from "react"
import { useState } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { FiMenu } from "react-icons/fi"
import Link from "next/link"
const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false)
  function handleToggleMenu() {
    setShowMenu(!showMenu)
  }

  return (
    <div>
      <div
        className={`${
          showMenu ? "block" : "hidden"
        } flex flex-col gap-10 justify-start absolute h-[100vh] w-[100%] overflow-x-hidden top-20 right-0 bg-neutral text-neutral-content`}
      >
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
          onClick={handleToggleMenu}
          className="btn btn-ghost btn-sm btn-square "
        >
          {showMenu ? (
            <AiOutlineClose className="text-2xl" />
          ) : (
            <FiMenu className="text-2xl" />
          )}
        </button>
      </div>
    </div>
  )
}

export default MobileMenu
