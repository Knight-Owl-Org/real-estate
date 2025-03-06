"use client"

import { useRef, useState, useEffect } from "react"
import { Link } from "react-router-dom"

const listings = [
  {
    id: 1,
    title: "Apartment 1",
    location: "Wellawatte, Colombo",
    price: "3.5Mil",
    image: "/home1.png",
  },
  {
    id: 2,
    title: "Apartment 2",
    location: "Wellawatte, Colombo",
    price: "3.5Mil",
    image: "/home2.png",
  },
  {
    id: 3,
    title: "Apartment 3",
    location: "Wellawatte, Colombo",
    price: "3.5Mil",
    image: "/background.png",
  },
]

const Listing = () => {
  const scrollRef = useRef(null)
  const isDown = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 800)

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth <= 800)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleMouseDown = (e) => {
    isDown.current = true
    scrollRef.current.classList.add("cursor-grabbing")
    startX.current = e.pageX - scrollRef.current.offsetLeft
    scrollLeft.current = scrollRef.current.scrollLeft
  }

  const handleMouseLeave = () => {
    isDown.current = false
    scrollRef.current.classList.remove("cursor-grabbing")
  }

  const handleMouseUp = () => {
    isDown.current = false
    scrollRef.current.classList.remove("cursor-grabbing")
  }

  const handleMouseMove = (e) => {
    if (!isDown.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX.current) * 2
    scrollRef.current.scrollLeft = scrollLeft.current - walk
  }

  // Add touch event handlers for mobile
  const handleTouchStart = (e) => {
    isDown.current = true
    startX.current = e.touches[0].pageX - scrollRef.current.offsetLeft
    scrollLeft.current = scrollRef.current.scrollLeft
  }

  const handleTouchMove = (e) => {
    if (!isDown.current) return
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft
    const walk = (x - startX.current) * 2
    scrollRef.current.scrollLeft = scrollLeft.current - walk
  }

  const handleTouchEnd = () => {
    isDown.current = false
  }

  return (
    <div
      id="listing"
      className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col lg:flex-row items-start lg:items-center gap-4 sm:gap-6 overflow-hidden mb-12 sm:mb-20"
    >
      <div className="relative w-full lg:w-1/4 min-w-0 mb-4 lg:mb-0">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-black">Top Listings</h2>
        <p className="text-gray-600 mt-2 sm:mt-8 text-sm sm:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>

      <div className="relative w-full lg:w-3/4">
        <div className="relative w-full h-[280px] sm:h-[320px]">
          <div className="absolute top-4 left-[10%] sm:left-[8%] w-[85%] sm:w-[70%] md:w-[65%] lg:w-[95%] h-3/5 lg:h-5/5 bg-black rounded-2xl"></div>

          <div
            ref={scrollRef}
            className="relative flex overflow-x-auto no-scrollbar cursor-grab z-10 px-2 sm:px-4 py-4 sm:py-6"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              scrollSnapType: "x mandatory",
              scrollBehavior: "smooth",
              gap: "16px",
              width: "100%",
            }}
          >
            <style>
              {`
                            .no-scrollbar::-webkit-scrollbar {
                                display: none;
                            }
                            .no-scrollbar {
                                -ms-overflow-style: none;
                                scrollbar-width: none;
                            }
                            .cursor-grab {
                                cursor: grab;
                            }
                            .cursor-grabbing {
                                cursor: grabbing;
                            }
                            `}
            </style>

            {listings.map((listing, index) => (
              <div
                key={listing.id}
                className={`flex-none bg-gray-100 rounded-xl shadow-lg overflow-hidden snap-center ${
                  isMobileView ? "w-[80%] sm:w-[70%] md:w-[60%]" : "w-60 sm:w-64 md:w-70 lg:w-80"
                } ${index === 0 ? "ml-2" : ""} ${index === listings.length - 1 ? "mr-4" : "mr-4"}`}
              >
                <img
                  src={listing.image || "/placeholder.svg"}
                  alt={listing.title}
                  className="w-full h-24 sm:h-32 md:h-40 lg:h-48 object-cover transition-all duration-300"
                />
                <div className="p-3 sm:p-4 bg-[#D9D9D9]">
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-black text-sm sm:text-base">{listing.title}</h3>
                    <p className="text-base sm:text-lg font-bold text-black">{listing.price}</p>
                  </div>
                  <p className="text-gray-500 text-xs sm:text-sm">{listing.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-4 sm:mt-8 z-10 flex justify-end">
          <Link to="/apartment">
            <button
              className="px-4 sm:px-6 py-2 bg-transparent text-black border border-none rounded-lg"
              style={{ cursor: "pointer" }}
            >
              Explore More →
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Listing

