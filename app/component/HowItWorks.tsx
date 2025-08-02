"use client"; 

import React from "react";

const HowItWorks = () => {
  return (
    <div className="w-full flex justify-center items-center">
                <div className="w-[95%]  flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-r from-[#181AC3] to-[#0C0E99] rounded-3xl text-white m-16">
            <div className="bg-[#EDEDFF] text-sm text-[#4A48FF] mb-2 px-4 py-1 border border-[#C7C6FF] border-[2px] rounded-full">
                Step By Step
            </div>
            <h2 className="text-3xl font-semibold mb-10 text-white">HOW IT WORKS</h2>

            <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 lg:gap-16">
                {/* Step 1 */}
                <div className="bg-white text-black rounded-xl p-6 w-[280px] text-center shadow-md z-10 md:scale-70 lg:scale-100">
                <div className="text-white bg-[#5B5FE9] w-10 h-10 mx-auto rounded-full flex items-center justify-center font-bold mb-4">
                    01
                </div>
                <h3 className="font-semibold mb-2">We learn your business</h3>
                <p className="text-sm text-gray-600">Pulling data from your website, services, and FAQs.</p>
                </div>

                {/* SVG Arrow 1 */}
                <div className="hidden md:block absolute left-[24%] top-1/2 transform -translate-y-1/2 z-0">
                <svg width="150" height="100" viewBox="0 0 150 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                    d="M10 50 C50 20, 100 80, 140 50"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeDasharray="6,6"
                    fill="none"
                    />
                    <polygon points="140,50 130,45 132,50 130,55" fill="#ffffff" />
                </svg>
                </div>

                {/* Step 2 */}
                <div className="bg-white text-black rounded-xl p-6 w-[280px] text-center shadow-md z-10 md:scale-70 lg:scale-100">
                <div className="text-white bg-[#5B5FE9] w-10 h-10 mx-auto rounded-full flex items-center justify-center font-bold mb-4">
                    02
                </div>
                <h3 className="font-semibold mb-2">You customize the voice, tone & tasks</h3>
                <p className="text-sm text-gray-600">Choose what the agent should say and do.</p>
                </div>

                {/* SVG Arrow 2 */}
                <div className="hidden md:block absolute left-[58%] top-1/2 transform -translate-y-1/2 z-0">
                <svg width="150" height="100" viewBox="0 0 150 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                    d="M10 50 C50 20, 100 80, 140 50"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeDasharray="6,6"
                    fill="none"
                    />
                    <polygon points="140,50 130,45 132,50 130,55" fill="#ffffff" />
                </svg>
                </div>

                {/* Step 3 */}
                <div className="bg-white text-black rounded-xl p-6 w-[280px] text-center shadow-md z-10 md:scale-70 lg:scale-100">
                <div className="text-white bg-[#5B5FE9] w-10 h-10 mx-auto rounded-full flex items-center justify-center font-bold mb-4">
                    03
                </div>
                <h3 className="font-semibold mb-2">Go live in minutes</h3>
                <p className="text-sm text-gray-600">
                    Your agent answers calls 24/7 and delivers leads directly to you.
                </p>
                </div>
            </div>
            </div>
    </div>
  );
};

export default HowItWorks;
