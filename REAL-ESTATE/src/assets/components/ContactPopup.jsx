import React from "react";

const ContactPopup = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white w-full max-w-lg md:max-w-2xl p-6 rounded-lg shadow-lg relative">
                
                <h2 className="text-center text-lg font-semibold text-gray-800 mt-6">
                    Contact Us
                </h2>

                {/* Form */}
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="flex flex-col">
                        <label className="text-gray-700 text-sm">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-700 text-sm">
                            Contact Number / Whatsapp
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your number"
                            className="border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-700 text-sm">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-700 text-sm">Message</label>
                        <textarea
                            placeholder="Enter your message"
                            className="border border-gray-400 p-2 rounded-md h-24 resize-none focus:outline-none focus:ring-2 focus:ring-gray-600"
                        ></textarea>
                    </div>
                </form>

                {/* Submit Button */}
                <div className="mt-6 text-center">
                    <button className="bg-[#4e3222] text-white px-6 py-2 rounded-md hover:bg-opacity-80 transition">
                        Contact Us
                    </button>
                </div>
                <br/>
            </div>
        </div>
    );
};

export default ContactPopup;
