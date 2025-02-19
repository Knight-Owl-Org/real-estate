import { useState } from "react";

export default function SearchForm() {
    const [activeTab, setActiveTab] = useState("rent");

    return (
        <div className="w-full mx-auto px-5 ml-20 sm:px-6  lg:px-8 py-12 flex flex-col  items-center gap-8 overflow-hidden">
            {/* Form Card with Tabs Inside */}
            <div className="bg-gray-200 rounded-lg p-10 w-full flex flex-col">
                {/* Tabs */}
                <div className="flex space-x-6 border-b border-gray-300 pb-2 mb-6">
                    <button
                        className={`pb-2 text-lg font-medium ${activeTab === "rent" ? "border-b-2 border-black" : "text-gray-500"
                            }`}
                        onClick={() => setActiveTab("rent")}
                    >
                        RENT
                    </button>
                    <button
                        className={`pb-2 text-lg font-medium ${activeTab === "buy" ? "border-b-2 border-black" : "text-gray-500"
                            }`}
                        onClick={() => setActiveTab("buy")}
                    >
                        BUY
                    </button>
                </div>

                {/* Fields with More Spacing */}
                <div className={`grid grid-cols-1 ml-15 ${activeTab === "buy" ? "md:grid-cols-4 gap-x-40" : "md:grid-cols-4 gap-x-40"} space-y-6 md:space-y-0`}>
                    {/* Location Input */}
                    <div>
                        <h3 className="text-lg font-semibold">Location</h3>
                        <input
                            type="text"
                            placeholder="Enter location"
                            className="w-full p-2 mt-2  rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                    </div>

                    {/* Property Type Input */}
                    <div>
                        <h3 className="text-lg font-semibold">Property Type</h3>
                        <input
                            type="text"
                            placeholder="Choose property type"
                            className="w-full p-2 mt-2 border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                    </div>

                    {/* Pricing Input */}
                    <div>
                        <h3 className="text-lg font-semibold">Pricing</h3>
                        <input
                            type="text"
                            placeholder="Enter price range"
                            className="w-full p-2 mt-2 border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                    </div>

                    {/* Loan Options (Only for "BUY" tab) */}
                    {/* {activeTab === "buy" && (
                        <div>
                            <h3 className="text-lg font-semibold">Loan Options</h3>
                            <input
                                type="text"
                                placeholder="Select financing options"
                                className="w-full p-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                            />
                        </div>
                    )} */}
                </div>
            </div>
                            
            {/* Search Button Centered Below the Gray Box */}
            <div className="mt-6">
                <button className="bg-[#372415] border-b border-black text-white px-15 py-3 rounded-lg flex items-center gap-2">
                    <span>🔍</span> Search
                </button>
            </div>

        </div>
    );
}
