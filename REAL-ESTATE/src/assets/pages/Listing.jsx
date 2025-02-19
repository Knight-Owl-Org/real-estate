import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
];

const Listing = () => {
    const scrollRef = useRef(null);
    const isDown = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 800);

    useEffect(() => {
        const handleResize = () => setIsMobileView(window.innerWidth <= 800);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleMouseDown = (e) => {
        isDown.current = true;
        scrollRef.current.classList.add("cursor-grabbing");
        startX.current = e.pageX - scrollRef.current.offsetLeft;
        scrollLeft.current = scrollRef.current.scrollLeft;
    };

    const handleMouseLeave = () => {
        isDown.current = false;
        scrollRef.current.classList.remove("cursor-grabbing");
    };

    const handleMouseUp = () => {
        isDown.current = false;
        scrollRef.current.classList.remove("cursor-grabbing");
    };

    const handleMouseMove = (e) => {
        if (!isDown.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX.current) * 2;
        scrollRef.current.scrollLeft = scrollLeft.current - walk;
    };

    return (
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row items-center gap-6 overflow-hidden">

            <div className="relative w-full md:w-6/8 lg:w-3/4 min-w-0">

                <h2 className="text-2xl sm:text-3xl font-semibold">Top Listings</h2>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </div>

            <div className="relative w-full md:w-6/8 lg:w-3/4">
                <div className="relative w-full h-[320px]">
                    <div className="absolute top-4 left-[10%] w-[70%] md:w-[65%]  lg:w-[95%] h-5/5 bg-black rounded-2xl"></div>

                    <div
                        ref={scrollRef}
                        className="relative flex overflow-x-auto no-scrollbar cursor-grab z-10 px-4 py-6"
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
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
                                className={`flex-none bg-gray-100 rounded-xl shadow-lg overflow-hidden snap-center ${isMobileView ? "w-full" : "w-60 sm:w-50 md:w-70 lg:w-80"
                                    } ${index === listings.length - 1 ? "mr-4" : ""}`}
                            >
                                <img
                                    src={listing.image}
                                    alt={listing.title}
                                    className="w-full h-24 sm:h-32  md:h-40 lg:h-48 object-cover transition-all duration-300"
                                />
                                <div className="p-4 bg-white ">
                                    <h3 className="font-semibold">{listing.title}</h3>
                                    <p className="text-gray-500 text-sm">{listing.location}</p>
                                    <p className="text-lg font-bold">{listing.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative mt-8 z-10 flex justify-end">
                    <Link to="/apartment">
                        <button className="px-6 py-2 bg-transparent text-black border border-none rounded-lg " style={{ cursor: "pointer" }}>
                            Explore More →
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Listing;
