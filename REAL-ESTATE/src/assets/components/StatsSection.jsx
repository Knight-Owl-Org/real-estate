import React from "react";
import CountUp from "react-countup";

const StatsSection = () => {
    return (
        <div className="flex justify-end items-center mt-0 px-4 w-fit">
            {/* White Box */}
            <div className="bg-white pt-2 px-3 rounded-md shadow-lg w-full max-w-4xl ml-auto">
                {/* Black Stats Box */}
                <div className="bg-black text-white p-6 rounded-md flex flex-wrap justify-between items-center w-full max-w-3xl shadow-lg gap-6 md:gap-16">
                    {/* Left Stat */}
                    <div className="flex items-center space-x-6 md:space-x-12">
                        <p className="text-xl md:text-4xl font-bold">
                            <CountUp end={723} duration={3} suffix="+" />
                        </p>
                        <div className="text-center leading-tight">
                            <p className="text-sm md:text-lg">Properties to</p>
                            <p className="text-sm md:text-lg">choose from</p>
                        </div>
                    </div>

                    {/* Right Stat */}
                    <div className="flex items-center text-center space-x-6 md:space-x-12">
                        <p className="text-xl md:text-4xl font-bold">
                            <CountUp end={58} duration={2} suffix="+" />
                        </p>
                        <div className="text-center leading-tight">
                            <p className="text-sm md:text-lg">Happy</p>
                            <p className="text-sm md:text-lg">Customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsSection;
