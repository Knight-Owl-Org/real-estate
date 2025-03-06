"use client"

import { useState } from "react"

export default function SearchForm() {
  const [activeTab, setActiveTab] = useState("rent")

  return (
    <div className="w-full mx-auto px-4 sm:px-5 md:ml-0 lg:ml-20 lg:px-8 py-6 sm:py-12 flex flex-col items-center gap-4 sm:gap-8 overflow-hidden">
      {/* Form Card with Tabs Inside */}
      <div className="bg-gray-200 text-black rounded-lg p-4 sm:p-6 md:p-10 w-full flex flex-col">
        {/* Tabs */}
        <div className="flex space-x-6 border-b border-gray-300 pb-2 mb-4 sm:mb-6">
          <button
            className={`pb-2 text-base sm:text-lg font-medium ${
              activeTab === "rent" ? "border-b-2 border-black" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("rent")}
          >
            RENT
          </button>
          <button
            className={`pb-2 text-base sm:text-lg font-medium ${
              activeTab === "buy" ? "border-b-2 border-black" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("buy")}
          >
            BUY
          </button>
        </div>

        {/* Fields with More Spacing */}
        <div
          className={`grid grid-cols-1 ${activeTab === "buy" ? "md:grid-cols-2 lg:grid-cols-4 md:gap-x-6 lg:gap-x-40" : "md:grid-cols-2 lg:grid-cols-4 md:gap-x-6 lg:gap-x-40"} space-y-6 md:space-y-0`}
        >
          {/* Location Input */}
          <div className="md:mb-4">
            <h3 className="text-lg font-semibold">Location</h3>
            <input
              type="text"
              placeholder="Enter location"
              className="w-full p-2 mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>

          {/* Property Type Input */}
          <div className="md:mb-4">
            <h3 className="text-lg font-semibold">Property Type</h3>
            <input
              type="text"
              placeholder="Choose property type"
              className="w-full p-2 mt-2 border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          {/* Pricing Input */}
          <div className="md:mb-4">
            <h3 className="text-lg font-semibold">Pricing</h3>
            <input
              type="text"
              placeholder="Enter price range"
              className="w-full p-2 mt-2 border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
        </div>
      </div>

      {/* Search Button Centered Below the Gray Box */}
      <div className="mt-2 sm:mt-6">
        <button className="bg-[#372415] border-b border-black text-white px-8 sm:px-15 py-2 sm:py-3 rounded-lg flex items-center gap-2">
          <span>🔍</span> Search
        </button>
      </div>
    </div>
  )
}

