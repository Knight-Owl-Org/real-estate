import React from "react";

const properties = [
    {
        id: 1,
        location: "Nawala, Colombo",
        name: "Paragon Residencies",
        price: "LKR 3.5Mil",
        beds: 2,
        baths: 1,
        size: "1300sq",
        image: "/p1.png", // Replace with actual image URL
    },
    {
        id: 2,
        location: "Nawala, Colombo",
        name: "Paragon Residencies",
        price: "LKR 3.5Mil",
        beds: 2,
        baths: 1,
        size: "1300sq",
        image: "/p1.png",
    },
    {
        id: 3,
        location: "Nawala, Colombo",
        name: "Paragon Residencies",
        price: "LKR 3.5Mil",
        beds: 2,
        baths: 1,
        size: "1300sq",
        image: "/p1.png",
    },
];

const PropertyList = () => {
    return (
        <div className="w-full md:w-1/3 p-4">
            <h2 className="text-gray-600 text-sm mb-4">More than 2k searches available</h2>
            <div className="space-y-4">
                {properties.map((property) => (
                    <div
                        key={property.id}
                        className="flex flex-col md:flex-row items-center md:items-start p-4 border border-gray-300 rounded-lg shadow-md bg-white"
                    >
                        <img
                            src={property.image}
                            alt={property.name}
                            className="w-full md:w-24 h-24 object-cover rounded-lg"
                        />
                        <div className="mt-2 md:ml-4 flex-1 text-center md:text-left">
                            <p className="text-gray-500 text-sm">{property.location}</p>
                            <h3 className="font-semibold text-lg">{property.name}</h3>
                            <p className="text-gray-500 text-sm">
                                {property.beds} bed rooms • {property.baths} bath
                            </p>
                            <p className="text-gray-500 text-sm">{property.size}</p>
                        </div>
                        <p className="font-bold text-gray-800 md:ml-auto">{property.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PropertyList;
