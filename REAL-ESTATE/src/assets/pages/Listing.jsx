import React from "react";

const listings = [
    {
        id: 1,
        title: "Apartment 1",
        location: "Wellawatte, Colombo",
        price: "3.5Mil",
        image: "https://source.unsplash.com/random/400x300?apartment"
    },
    {
        id: 2,
        title: "Apartment 2",
        location: "Wellawatte, Colombo",
        price: "3.5Mil",
        image: "https://source.unsplash.com/random/400x300?modern-house"
    },
    {
        id: 3,
        title: "Apartment 3",
        location: "Wellawatte, Colombo",
        price: "3.5Mil",
        image: "https://source.unsplash.com/random/400x300?interior"
    }
];

const Listing = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12 flex items-center">
            {/* Left Section */}
            <div className="w-1/3">
                <h2 className="text-3xl font-semibold">Top Listings</h2>
                <p className="text-gray-600 mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>

            {/* Right Section - Horizontal Scroll */}
            <div className="w-2/3 overflow-hidden">
                <div className="flex space-x-4 overflow-x-auto no-scrollbar">
                    {listings.map((listing) => (
                        <div key={listing.id} className="min-w-[250px] bg-gray-100 rounded-xl shadow-lg overflow-hidden">
                            <img src={listing.image} alt={listing.title} className="w-full h-40 object-cover" />
                            <div className="p-4">
                                <h3 className="font-semibold">{listing.title}</h3>
                                <p className="text-gray-500 text-sm">{listing.location}</p>
                                <p className="text-lg font-bold">{listing.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Listing;
