import { createContext, useContext, useState } from "react"

export const CategoryContext = createContext()

export function useCategory() {
  return useContext(CategoryContext)
}

export function CategoryProvider({ children }) {
  const [defaultCategory, setDefaultCategory] = useState("")

  return (
    <CategoryContext.Provider value={{ defaultCategory, setDefaultCategory }}>
      {children}
    </CategoryContext.Provider>
  )
}
