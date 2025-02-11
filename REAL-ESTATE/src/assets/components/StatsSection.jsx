const StatsSection = () => {
    return (
        <div className="flex justify-center items-center mt-10 ">
            {/* White Box */}
            <div className="bg-white p-4 rounded-2xl shadow-lg ">
                {/* Black Stats Box */}
                <div className="bg-black text-white p-6 rounded-2xl flex justify-around items-center w-[680px] shadow-lg">

                    {/* Left Stat */}
                    <div className="flex items-center space-x-8">
                        <p className="text-2xl font-bold">723+</p>
                        <div className="text-center leading-tight">
                            <p className="text-sm">Properties to</p>
                            <p className="text-sm">choose from</p>
                        </div>
                    </div>

                    {/* Right Stat */}
                    <div className="flex items-center text-center space-x-8">
                        <p className="text-2xl font-bold">58+</p>
                        <div className="text-center leading-tight">
                            <p className="text-sm">Happy</p>
                            <p className="text-sm">Customers</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default StatsSection;
