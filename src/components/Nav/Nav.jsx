import React from "react"
import Link from "next/link"
const Nav = () => {
  return (
    <nav className="flex justify-between">
      <Link href="/">
        <button className="normal-case text-xl">Dz Express</button>
      </Link>
    </nav>
  )
}

export default Nav
