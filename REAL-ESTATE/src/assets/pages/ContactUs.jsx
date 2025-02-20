import React, { useState, useRef, useEffect } from "react";
import loadingGif from "/loading.gif"; // Replace with the actual path to your loading GIF

const ContactUs = () => {
    const [showPopup, setShowPopup] = useState(false);
    const popupRef = useRef(null);

    const [formData, setFormData] = useState({
        message: '',
        name: '',
        contact: '',
        email: '',
    });

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // <-- New state for loading GIF

    // Close popup when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setShowPopup(false);
            }
        };

        if (showPopup) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showPopup]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.contact || !formData.email || !formData.message) {
            setError("All fields are required!");
            return;
        }

        setLoading(true); // Show loading GIF

        try {
            const response = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setTimeout(() => {
                    alert("Message sent successfully!");
                    setFormData({ name: '', contact: '', email: '', message: '' });
                    setShowPopup(false);
                    setLoading(false); // Hide loading GIF
                }, 2000); // Wait for 2 seconds to simulate sending process
            } else {
                alert("Failed to send message.");
                setLoading(false);
            }
        } catch (error) {
            console.error("Error sending message:", error);
            setLoading(false);
        }
    };

    return (
        <div className="w-full">
            <h2 className="text-2xl font-semibold text-black text-center py-6">
                Contact Us
            </h2>

            <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
                <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline>
                    <source src="/background-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {showPopup ? (
                    <div ref={popupRef} className="bg-white w-full max-w-lg md:max-w-2xl p-6 rounded-lg shadow-lg relative">
                        <h2 className="text-center text-lg font-semibold text-gray-800 mt-6">
                            Contact Us
                        </h2>

                        {error && <p className="text-red-500 text-center">{error}</p>}

                        {loading ? (
                            <div className="flex justify-center items-center">
                                <img src={loadingGif} alt="Loading..." className="w-20 h-20" />
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
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
                                    <label className="text-gray-700 text-sm">Contact Number / WhatsApp</label>
                                        <input
                                            type="text"
                                            placeholder="Enter Contact"
                                            value={formData.contact}
                                            onChange={(e) => {
                                                const inputVal = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
                                                if (inputVal.length <= 10) {
                                                    setFormData({ ...formData, contact: inputVal });
                                                }
                                            }}
                                            className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-black"
                                            maxLength="10"
                                            required
                                        />
                                        {formData.contact.length > 0 && formData.contact.length !== 10 && (
                                            <span className="text-red-500 text-sm mt-1">Mobile number should be 10 digits.</span>
                                        )}
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-gray-700 text-sm">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Enter Email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-black"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col ">
                                    <label className="text-gray-700 text-sm">Message</label>
                                    <input

                                            type="text"
                                            placeholder="Enter Email"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-black"
                                            required
                                    />
                                </div>

                                <div className="mt-6 text-center md:col-span-2">
                                    <button type="submit" className="bg-[#4e3222] text-white px-6 py-2 rounded-md hover:bg-opacity-80 transition">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                ) : (
                    <div className="relative flex flex-col md:flex-row gap-20 w-full max-w-7xl z-10 p-10">
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

                        <div className="relative bg-black/40 p-6 rounded-xl flex flex-col items-center justify-between w-full max-w-lg">
                            <div className="bg-white/80 backdrop-blur-md rounded-lg p-6 flex flex-col items-center w-full">
                                <div className="flex items-center justify-center w-full">
                                    <div className="p-3 bg-gray-100 rounded-full flex-shrink-0">
                                        <span role="img" aria-label="email">📧</span>
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
