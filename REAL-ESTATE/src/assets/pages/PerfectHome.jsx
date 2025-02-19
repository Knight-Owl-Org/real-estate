import React, { useState } from 'react'
import Header from '../components/header'
import StatsSection from '../components/StatsSection';



const PerfectHome = () => {
    const [activeTab, setActiveTab] = useState("Rent");
  return (
      <div className="w-full flex flex-col overflow-x-hidden">

         <Header/>
          <div
              className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center z-0"
              style={{
                  backgroundImage: "url('/background.png')",
                  backgroundAttachment: "fixed", // Ensures the background stays fixed
                  backgroundSize: "cover", // Ensures the image covers the entire area
                  backgroundPosition: "center center", // Centers the background image
              }}
          ></div>

          {/* Overlay (Optional for dark effect) */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Content */}
          
          <div className="relative z-10 flex flex-col xl:flex-row xl:max-w-[1500px] items-center justify-center h-screen px-35 mt-10 lg:mt-0  lg:mr-31 ">
              {/* Left Side - Title */}
              <div className="self-start text-white mb-6 lg:mb-0 whitespace-nowrap min-w-fit text-left ml-0 lg:ml-[200px] mt-75">

                  <h1 className="text-4xl font-serif">
                      Perfect <span className="italic text-gray-300">Home</span>
                  </h1>
              </div>

              {/* Right Side - Transparent Form */}
              
              <div className="bg-white/20 backdrop-transparent-lg p-6 sm:p-6 md:p-8 rounded-lg shadow-lg lg:ml-[200px] lg:w-[500px] xl:w-[700px] text-white mb-6 lg:mb-0 mr-auto ">
                  <div className="flex w-30 bg-white/30 mb-10 p-1">
                      <button
                          className={`px-3 py-1 text-sm  ${activeTab === "Rent"
                              ? "text-black font-semibold border-b-2 border-black"
                              : "text-black font-semibold "
                              }`}
                          onClick={() => setActiveTab("Rent")}
                      >
                          RENT
                      </button>
                      <button
                          className={`px-3 py-1 text-sm  ${activeTab === "Buy"
                              ? "text-black font-semibold border-b-2 border-black"
                              : "text-black font-semibold "
                              }`}
                          onClick={() => setActiveTab("Buy")}
                      >
                          BUY
                      </button>
                  </div>
                  <form>
                      <div className="mb-3 text-left">
                          <label className="block text-sm mb-1 ">Location</label>
                          <input type="text" className="w-full p-2 bg-white/0 rounded-md text-white placeholder-gray-300" placeholder="Enter location" />
                      </div>
                      <div className="mb-3">
                          <label className="block text-sm mb-1">Property Type</label>
                          <select className="w-full p-2 bg-white/0 rounded-md text-white">
                              <option className='text-black'>Apartment</option>
                              <option className='text-black'>House</option>
                              <option className='text-black'>Villa</option>
                          </select>
                      </div>
                      <div className="mb-3">
                          <label className="block text-sm mb-1">Price Range</label>
                          <input type="text" className="w-full p-2 bg-white/0 rounded-md text-white placeholder-gray-300" placeholder="Enter price range" />
                      </div>
                      {/* Additional Input Field for "Buy" Option */}
                      {activeTab === "Buy" && (
                          <div className="mb-3">
                              <label className="block text-sm mb-1">Additional Request</label>
                              <textarea
                                  className="w-full p-2 bg-white/20 rounded-md text-white placeholder-gray-300"
                                  placeholder="Enter additional request"
                              ></textarea>
                          </div>
                      )}

                      <button type="submit" className="w-30 p-2 mt-2 bg-black/50 hover:bg-black/70 rounded-md mx-auto block">
                          Search
                      </button>

                  </form>
              </div>
          </div>
          
          {/* Stats Section */}
          <div className="relative z-30 w-full justify-end left-4">
              <div className="absolute top-0 right-0">
                  <StatsSection />
              </div>
          </div>
          <br/>
    </div>
  )
}

export default PerfectHome