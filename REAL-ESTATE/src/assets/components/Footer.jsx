import React from "react";

export default function Footer() {
    return (
        <footer className="text-black">
            {/* Social Media Section */}
            <div className="mt-0 mx-0">
                <div className="py-3 md:px-40 flex flex-col sm:flex-row justify-center items-center">
                    <div className="flex gap-2 -mr-4 md:mx-4 my-15">
                        <a href="https://www.linkedin.com/company/knight-owl-online/" target="_blank" rel="noopener noreferrer"
                            className="text-black hover:text-gray transition-colors">
                            <img src="/linkedin.png" alt="LinkedIn" width={30} height={30} />
                        </a>
                        <a href="https://www.facebook.com/Kni8Owl" target="_blank" rel="noopener noreferrer"
                            className="text-black hover:text-gray transition-colors">
                            <img src="/facebook.png" alt="Facebook" width={30} height={30} />
                        </a>
                        <a href="https://www.instagram.com/knightowl.online/" target="_blank" rel="noopener noreferrer"
                            className="text-black hover:text-gray transition-colors">
                            <img src="/instagram.png" alt="Instagram" width={30} height={30} />
                        </a>
                        <a href="https://x.com/Kni8Owl" target="_blank" rel="noopener noreferrer"
                            className="text-black hover:text-gray transition-colors">
                            <img src="/x.png" alt="X" width={30} height={30} />
                        </a>
                    </div>
                </div>
                <hr/>
                {/* Copyright Section */}
                <div className="text-center mt-6 text-gray-400 space-y-2 my-4">
                    <p>© Copyright Knight Owl All Rights Reserved</p>
                    <p>
                        Designed by{" "}
                        <a href="#" className="hover:text-[#FFA500] transition-colors">
                            Knight Owl
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
