"use client"

import { useState, useEffect, useRef } from "react"
import checkIcon from "/checkIcon.png"

const BoxesDisplay = () => {
  const [visibleBoxes, setVisibleBoxes] = useState([])
  const [openIndexes, setOpenIndexes] = useState([])
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef(null)

  // Set up intersection observer to detect when component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true)
          // Once we've detected it's in view, we can disconnect the observer
          observer.disconnect()
        }
      },
      { threshold: 0.2 }, // Trigger when at least 20% of the element is visible
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Only start the animation when the section is in view
  useEffect(() => {
    if (!isInView) return

    const interval = setInterval(() => {
      setVisibleBoxes((prev) => {
        if (prev.length < 4) {
          return [...prev, prev.length] // Add next box index
        } else {
          clearInterval(interval)
          return prev
        }
      })
    }, 800)

    return () => clearInterval(interval)
  }, [isInView])

  const handleToggle = (index) => {
    setOpenIndexes((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div id="value" className="flex flex-col md:flex-row items-start px-6 md:px-18 py-15 mb-20" ref={sectionRef}>
      {/* FAQ Section */}
      <div className="w-full md:w-[60%] pr-5   md:pr-10 lg:pl-2">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-black ">The Value we give to you</h2>

        {/* FAQ Section */}
        <div className=" mx-auto  ">
          {[
            {
              question: "How do I know if I qualify for a mortgage?",
              answer:
                "Mortgage qualification depends on factors like your credit score, income, debt-to-income ratio, and down payment...",
            },
            {
              question: "What are the key factors to consider when buying a home?",
              answer:
                "Mortgage qualification depends on factors like your credit score, income, debt-to-income ratio, and down payment...",
            },
            {
              question: "What are the costs involved in selling a property?",
              answer:
                "Mortgage qualification depends on factors like your credit score, income, debt-to-income ratio, and down payment...",
            },
            {
              question: "How can I increase the value of my home before selling?",
              answer:
                "Mortgage qualification depends on factors like your credit score, income, debt-to-income ratio, and down payment...",
            },
          ].map((faq, index) => (
            <details key={index} className="mb-6 border-b border-gray-400 pb-2" open={openIndexes.includes(index)}>
              <summary
                className="cursor-pointer text-black text-lg font-bold list-none flex justify-between items-center"
                onClick={(e) => {
                  e.preventDefault() // Prevent default <details> behavior
                  handleToggle(index)
                }}
              >
                {faq.question}
                <span
                  className={`ml-2 transition-transform  duration-300 ${openIndexes.includes(index) ? "rotate-180" : ""}`}
                >
                  ▽
                </span>
              </summary>

              {faq.answer && <p className="text-gray-700 mt-2 text-sm md:text-base">{faq.answer}</p>}
            </details>
          ))}
        </div>
      </div>

      {/* Boxes Section (Right Side) */}
      <div className="w-full md:w-[40%] flex justify-center md:justify-start max-w-[600px] lg:max-w-[700px]">
        <div className="grid grid-cols-2 gap-2 md:gap-6 lg:gap-8 ml-2 md:ml-16 lg:ml-32">
          {[0, 1, 2, 3].map((index) => {
            const colors = ["bg-[#5F4932]", "bg-[#504739;]", "bg-[#0D0705;]", "bg-[#372415]"] // 4 unique colors
            return (
              <div
                key={index}
                className={`w-24 h-24 md:w-32 md:h-32 lg:w-45 lg:h-45 flex flex-col items-center justify-center 
                                rounded-lg transition-all duration-400 transform scale-90 opacity-0
                                ${visibleBoxes.includes(index) ? "scale-100 opacity-100" : ""} 
                                ${colors[index]}
                                ${index === 1 || index === 3 ? "-mt-3 md:-mt-3 lg:-mt-8" : ""}`} // Move black & purple boxes up
              >
                <div className="w-7 h-7 md:w-9 md:h-9 lg:w-10 lg:h-10 flex items-center  justify-center bg-transparent rounded-full border-2 border-gray-500">
                  <img src={checkIcon || "/placeholder.svg"} alt="Check Icon" className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <p className="text-white mt-1 text-xs md:text-sm lg:text-base">Safe & Reliable</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default BoxesDisplay

