import React from "react"
import Nav from "./Nav/Nav"

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <main> {children} </main>
    </div>
  )
}

export default Layout
