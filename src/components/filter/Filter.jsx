import { useCategory } from "@/context/CategoryContext"
import React, { useState } from "react"

const Filter = ({
  categories,
  filterItemsByCategory,
  filterItemsByPriceRange,
  filterItemsByRating,
  resetFilters,
}) => {
  const { defaultCategory, setDefaultCategory } = useCategory()
  const [buttonClicked, setButtonClicked] = useState(false)
  const handleButtonClick = () => {
    setButtonClicked(!buttonClicked)
  }

  const [selectedCategory, setSelectedCategory] = useState(defaultCategory)
  const [priceFrom, setPriceFrom] = useState("")
  const [priceTo, setPriceTo] = useState("")
  const [rating, setRating] = useState(null)
  const priceRanges = [50, 100, 150, 200]
  const starRatings = [5, 4, 3, 2, 1]

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat)
    filterItemsByCategory(cat) // Call the filter function
  }

  const handlePriceFromChange = (event) => {
    const price = event.target.value
    setPriceFrom(price)
    filterItemsByPriceRange(price, priceTo) // Call the filter function
  }

  const handlePriceToChange = (event) => {
    const price = event.target.value
    setPriceTo(price)
    filterItemsByPriceRange(priceFrom, price) // Call the filter function
  }

  const handleRatingChange = (value) => {
    setRating(value)
    filterItemsByRating(value) // Call the filter function
  }
  return (
    <div className="flex flex-row justify-end">
      <div className="flex flex-col justify-end p-4">
        <div className="flex flex-row justify-end">
          <button
            onClick={handleButtonClick}
            id="dropdownDefault"
            data-dropdown-toggle="dropdown"
            className="bg-primary-700 border-2 border border-black font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
            type="button"
          >
            <span className="hidden lg:inline">Filters</span>
            <svg
              className="w-4 h-4 ml-2 hidden lg:inline"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <svg
              className="w-4 h-4 lg:hidden"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" />
            </svg>
          </button>
        </div>
        {/* Dropdown menu */}
        {buttonClicked && (
          <div className="lg:mt-1 w-64 lg:pt-2 lg:relative lg:inline-block lg:text-left lg:top-0  absolute left-0 top-16 top-0">
            <div className="lg:relative w-full h-screen lg:h-fit bg-white shadow-lg">
              <span className="rounded-md shadow-sm">
                {/* Single Dropdown */}
                <div className="absolute w-64 rounded-md bg-white lg:shadow-lg">
                  <div className="px-4 py-3">
                    <div className="flex flex-row justify-between">
                      <p className="text-sm font-medium text-gray-900">
                        Filters
                      </p>
                      <a
                        href="#"
                        onClick={resetFilters}
                        className="text-sm justify-end font-medium text-gray-900"
                      >
                        Reset
                      </a>
                    </div>
                    {/* Category Checkboxes */}
                    <div className="mt-4">
                      <p className="text-sm font-medium text-gray-900">
                        Category
                      </p>
                      {categories.map((cat) => (
                        <div key={cat}>
                          {console.log("cat", cat, "s", selectedCategory)}
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              id={cat}
                              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                              onChange={() => handleCategoryChange(cat)}
                              checked={selectedCategory === cat}
                            />
                            <span className="ml-2 text-gray-700">{cat}</span>
                          </label>
                        </div>
                      ))}
                    </div>

                    {/* Price Range */}
                    <div className="mt-4">
                      <p className="text-sm font-medium text-gray-900">
                        Price Range
                      </p>
                      <div className="flex space-x-4">
                        <select
                          onChange={handlePriceFromChange}
                          value={priceFrom}
                          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-2 border border-black text-xs rounded-md"
                        >
                          <option value="">From</option>
                          {priceRanges.map((range) => (
                            <option key={range} value={range}>
                              {`$${range}`}
                            </option>
                          ))}
                        </select>
                        <select
                          onChange={handlePriceToChange}
                          value={priceTo}
                          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-2 border border-black text-xs rounded-md"
                        >
                          <option value="">To</option>
                          {priceRanges.map((range) => (
                            <option key={range} value={range}>
                              {`$${range}`}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Rating Radio Buttons */}
                    <div className="mt-4">
                      <p className="text-sm font-medium text-gray-900">
                        Rating
                      </p>
                      {starRatings.map((ratingValue) => (
                        <div key={ratingValue}>
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                              onChange={() => handleRatingChange(ratingValue)}
                              checked={rating === ratingValue}
                            />
                            <span className="ml-2 text-gray-700">
                              {"⭐️".repeat(ratingValue)}
                            </span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Filter
