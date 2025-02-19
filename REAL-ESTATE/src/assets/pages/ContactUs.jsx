import React, { useState, useRef, useEffect } from "react";

const ContactUs = () => {
    const [showPopup, setShowPopup] = useState(false);
    const popupRef = useRef(null);

    const [formData, setFormData] = useState({
        
        messaage: '',
        name: '',
        contact: '',
        email:'',
        recipientResidential: '',
        
    })

    // Close popup when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setShowPopup(false);
            }
        };

        if (showPopup) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showPopup]);

    return (
        <div className="w-full">
            {/* Contact Us Heading */}
            <h2 className="text-2xl font-semibold text-black text-center py-6">
                Contact Us
            </h2>

            {/* Full-Screen Background Section */}
            <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/background-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Show popup if "Message" button is clicked */}
                {showPopup ? (
                    
                    <div ref={popupRef} className="bg-white w-full max-w-lg md:max-w-2xl p-6 rounded-lg shadow-lg relative">
                        
                            <h2 className="text-center text-lg font-semibold text-gray-800 mt-6">
                                Contact Us
                            </h2>

                            {/* Form */}
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                <div className="flex flex-col">
                                    <label className="text-gray-700 text-sm">Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-black"
                                    required
                                />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-gray-700 text-sm">
                                        Contact Number / Whatsapp
                                    </label>
                                <input
                                    type="text"
                                    placeholder="Enter Contact"
                                    value={formData.contact}
                                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                                    className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-black"
                                    required
                                />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-gray-700 text-sm">Email</label>
                                <input
                                    type="text"
                                    placeholder="Enter Address"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-black"
                                    required
                                />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-gray-700 text-sm">Message</label>
                                <input
                                    type="text"
                                    placeholder="Enter Message"
                                    value={formData.messaage}
                                    onChange={(e) => setFormData({ ...formData, messaage: e.target.value })}
                                    className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-black"
                                    required
                                />
                                </div>
                            </form>

                            {/* Submit Button */}
                            <div className="mt-6 text-center">
                                <button className="bg-[#4e3222] text-white px-6 py-2 rounded-md hover:bg-opacity-80 transition">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    
                ) : (
                    // Contact Cards Container (Hidden when popup is active)
                    <div className="relative flex flex-col md:flex-row gap-20 w-full max-w-7xl z-10 p-10">
                        {/* Call Section */}
                        <div className="relative bg-black/40 p-6 rounded-xl flex flex-col items-center justify-between w-full max-w-sm">
                            <div className="bg-white/80 backdrop-blur-md rounded-lg p-6 flex flex-col items-center w-full">
                                <div className="flex items-center justify-center w-full">
                                    <div className="p-3 bg-gray-100 rounded-full flex-shrink-0">
                                        <span role="img" aria-label="call">📞</span>
                                    </div>
                                    <div className="ml-4 text-center">
                                        <h3 className="text-lg font-medium">Call</h3>
                                        <p className="text-gray-600">0721526349</p>
                                    </div>
                                </div>
                            </div>
                            <button className="mt-4 w-full py-2 bg-black text-white rounded-lg shadow-md">
                                Call Now
                            </button>
                        </div>

                        {/* Email Section */}
                        <div className="relative bg-black/40 p-6 rounded-xl flex flex-col items-center justify-between w-full max-w-lg">
                            <div className="bg-white/80 backdrop-blur-md rounded-lg p-6 flex flex-col items-center w-full">
                                <div className="flex items-center justify-center w-full">
                                    <div className="p-3 bg-gray-100 rounded-full flex-shrink-0">
                                        <span role="img" aria-label="call">📧</span>
                                    </div>
                                    <div className="ml-4 text-center">
                                        <h3 className="text-lg font-medium">Email</h3>
                                        <p className="text-gray-600">knightowl@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowPopup(true)}
                                className="mt-4 w-full py-2 bg-black text-white rounded-lg shadow-md"
                            >
                                Message
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContactUs;
