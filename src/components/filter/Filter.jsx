import React, { useState } from "react"

const Filter = () => {
  const [buttonClicked, setButtonClicked] = useState(false)
  const handleButtonClick = () => {
    setButtonClicked(!buttonClicked)
  }
  const [category, setCategory] = useState([])
  const [priceFrom, setPriceFrom] = useState("")
  const [priceTo, setPriceTo] = useState("")
  const [rating, setRating] = useState(null)
  const categories = [
    "electronics",
    "jewelry",
    "men's clothing",
    "women's clothing",
  ]
  const priceRanges = [50, 100, 150, 200]
  const starRatings = [5, 4, 3, 2, 1]
  const handleCategoryChange = (event) => {
    // Handle category checkbox changes here
    setCategory(event.target)
  }

  const handlePriceFromChange = (event) => {
    // Handle price "from" select changes here
  }

  const handlePriceToChange = (event) => {
    // Handle price "to" select changes here
  }

  const handleRatingChange = (value) => {
    // Handle rating radio button changes here
    setRating(value)
  }
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <button
        onClick={handleButtonClick}
        id="dropdownDefault"
        data-dropdown-toggle="dropdown"
        className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        type="button"
      >
        <span className="hidden lg:inline">Filters</span>
        <svg
          className="w-4 h-4 ml-2"
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
      </button>
      {/* Dropdown menu */}
      {buttonClicked && (
        <div className="lg:mt-1 w-64 lg:pt-2 lg:relative lg:inline-block lg:text-left lg:top-0  absolute left-0 top-16 top-0">
          <div className="lg:relative w-full h-screen lg:h-fit bg-white shadow-lg">
            <span className="rounded-md shadow-sm">
              {/* Single Dropdown */}
              <div className="absolute w-64 rounded-md bg-white lg:shadow-lg">
                <div className="px-4 py-3">
                  <p className="text-sm font-medium text-gray-900">Filters</p>

                  {/* Category Checkboxes */}
                  <div className="mt-4">
                    <p className="text-sm font-medium text-gray-900">
                      Category
                    </p>
                    {categories.map((cat) => (
                      <div key={cat}>
                        <label className="inline-flex items-center">
                          <input
                            type="checkbox"
                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                            onChange={handleCategoryChange}
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
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
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
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
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
                    <p className="text-sm font-medium text-gray-900">Rating</p>
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
  )
}

export default Filter
