import { useState } from "react";
import HotelMap from "./HotelMap";

const images = [
    "/p1.png",
    "/home1.png",
    "/home2.png",
    "/background.png",
];

export default function ImageGallery() {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div className="w-full h-screen flex flex-col pl-4">
            {/* Header */}
            <div className="flex items-center justify-start px-6 py-4">
                {/* Title & Subtitle */}
                <div className="text-left">
                    <h1 className="text-3xl font-bold">Parogon Residence</h1>
                    <p className="text-sm text-gray-600">Navala</p>
                </div>
                {/* Spacer pushes the search button to the right of header */}
                <div className="flex-grow" />
                {/* Search Button */}
                <div>
                    <button className="mr-10 bg-gray-900 text-white px-4 py-2 rounded">
                        Search
                    </button>
                </div>
            </div>

            {/* Content Wrapper */}
            <div className="flex flex-grow items-start justify-start px-4 ml-10">
                <div className="flex flex-col md:flex-row w-full justify-start">
                    {/* Main Image */}
                    <div className="w-full md:w-3/4 mr-25">
                        <img
                            src={selectedImage}
                            alt="Main"
                            className="w-full h-auto object-cover rounded-lg shadow-lg"
                        />
                        {/* Info Icons under the image */}
                        <div className="flex items-center justify-center space-x-8 flex-wrap  mt-4">
                            {/* Bedrooms */}
                            <div className="flex items-center space-x-2">
                                <img
                                    src="/f1.png"
                                    alt="Bed Icon"
                                    className="w-5 h-5"
                                />
                                <span className="text-gray-600">2 Bedrooms</span>
                            </div>

                            {/* Bathroom */}
                            <div className="flex items-center space-x-2">
                                <img
                                    src="/f2.png"
                                    alt="Bath Icon"
                                    className="w-5 h-5"
                                />
                                <span className="text-gray-600">1 Bathroom</span>
                            </div>

                            {/* Area */}
                            <div className="flex items-center space-x-2">
                                <img
                                    src="/f3.png"
                                    alt="Home Icon"
                                    className="w-5 h-5"
                                />
                                <span className="text-gray-600">1300Sq Area</span>
                            </div>

                            {/* Parking */}
                            <div className="flex items-center space-x-2">
                                <img
                                    src="/f4.png"
                                    alt="Parking Icon"
                                    className="w-5 h-5"
                                />
                                <span className="text-gray-600">1 Parking Space</span>
                            </div>
                        </div>
                    </div>

                    {/* Thumbnail List */}
                    <div className="flex flex-row flex-wrap  md:flex-col gap-1  mt-4 md:mt-0">
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Thumbnail ${index + 1}`}
                                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${selectedImage === img ? "border-gray-900" : "border-transparent"
                                    }`}
                                onClick={() => setSelectedImage(img)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start px-4 md:px-0 h-full ml-4">
                <h3 className="text-2xl font-bold mb-8 justify-start mt-10">
                    Property Details
                </h3>
                <p className="font-bold mb-8 justify-start ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quidem eum culpa ipsa reiciendis eos, tempore tempora molestias. Necessitatibus, facilis magni totam voluptatem unde illo amet voluptas sed impedit voluptatum.</p>
                <HotelMap />
            </div>


        </div>
    );
}
