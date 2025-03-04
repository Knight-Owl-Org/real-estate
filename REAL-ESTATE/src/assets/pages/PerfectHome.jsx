import React, { useState } from 'react'
import Header from '../components/Header'
import StatsSection from '../components/StatsSection';

const PerfectHome = () => {
    const [activeTab, setActiveTab] = useState("Rent");
    return (
        <div className="w-full overflow-x-hidden mb-20 bg-cover bg-center" style={{ backgroundImage: "url('/background.png')" }}>

            <Header />

            {/* Overlay (Optional for dark effect) */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row items-start justify-between h-screen px-4 md:px-8 lg:px-16 w-full max-w-[1500px] mx-auto md:mt-30">
            {/* Left Side - Title and Logo */}
            <div className="self-start text-white mb-6 md:mb-0 mt-16 md:mt-32 lg:mt-40">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif">
                    Perfect <span className="italic font-light">Home</span>
                </h1>
            </div>

            {/* Right Side - Transparent Form */}
            <div className="bg-white/20  p-6 md:p-2 rounded-2xl shadow-lg w-full max-w-xl text-white self-center md:self-center">
            <div className="flex w-2/5 bg-white/30 mb-10 p-1">
                        <button
                            className={`px-3 py-1 text-sm  ${activeTab === "Rent" ? "text-black font-semibold border-b-2 border-black" : "text-black font-semibold "}`}
                            onClick={() => setActiveTab("Rent")}
                        >
                            RENT
                        </button>
                        <button
                            className={`px-3 py-1 text-sm  ${activeTab === "Buy" ? "text-black font-semibold border-b-2 border-black" : "text-black font-semibold "}`}
                            onClick={() => setActiveTab("Buy")}
                        >
                            BUY
                        </button>
                    </div>
                <form className='px-8'>
                    <div className="mb-6 text-left">
                        <label className="block text-lg font-medium mb-1">Location</label>
                        <input 
                            type="text" 
                            className="w-full p-2 bg-transparent  text-white placeholder-white/70" 
                            placeholder="Where do you want to live?" 
                        />
            </div>
            <div className="mb-6 text-left">
                <label className="block text-lg font-medium mb-1">Property Type</label>
                <input 
                    type="text" 
                    className="w-full p-2 bg-transparent  text-white placeholder-white/70" 
                    placeholder="Choose your property type" 
                />
            </div>
            <div className="mb-8 text-left">
                <label className="block text-lg font-medium mb-1">Pricing</label>
                <input 
                    type="text" 
                    className="w-full p-2 bg-transparent  text-white placeholder-white/70" 
                    placeholder="Choose price range" 
                />
            </div>
            {activeTab === "Buy" && (
                <div className="mb-6 text-left">
                    <label className="block text-lg font-medium mb-1">Additional Request</label>
                    <textarea
                        className="w-full p-2 bg-transparent  text-white placeholder-white/70"
                        placeholder="Enter additional request"
                    ></textarea>
                </div>
            )}

            <div className="flex justify-center">
                <button 
                    type="submit" 
                    className="w-2/3 p-6 mt-4 mb-4 bg-[#372415] hover:bg-[#4a3020] rounded-md flex items-center justify-center"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Search
                </button>
            </div>

                </form>
            </div>
        </div>

                    <div className='flex justify-end mx-12'>
                    <StatsSection />
                    </div>
        </div>
    )
}

export default PerfectHome
