import { CirclePlay } from "lucide-react";
import Image from "next/image";
import GoogleCalendarCard from "./googleCalenderCard";
import BookingRateCard from "./bookingRateCard";
const Hero = () => {
    return (
        <section className="pt-7 px-2 sm:px-4">
            <div className="flex justify-center items-center">
                <div className="bg-[#060483] w-full max-w-6xl h-fit rounded-2xl overflow-hidden relative p-4 sm:p-8">
                    {/* Grid overlay */}
                    <div
                        className="absolute inset-0 z-0 pointer-events-none"
                        style={{
                            backgroundImage: `
                                linear-gradient(to right, rgba(229,231,235,0.2) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(229,231,235,0.2) 1px, transparent 1px)
                            `,
                            backgroundSize: "48px 48px",
                        }}
                    />
                    {/* Headline */}
                    <div className="flex flex-col items-center justify-center mt-8 sm:mt-10 relative z-10">
                        <span className="text-white text-2xl sm:text-3xl md:text-4xl font-light uppercase text-center">
                            Turn every call into a lead with
                        </span>
                        <span className="text-white text-2xl sm:text-3xl md:text-4xl font-light uppercase text-center">
                            24/7 AI agents for your
                        </span>
                        <span className="text-white text-2xl sm:text-3xl md:text-4xl font-light uppercase text-center">
                            business.
                        </span>
                    </div>
                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-0 relative z-10 mt-5">
                        <button className="bg-[#4A48FF] text-white text-sm px-6 py-2 rounded w-full sm:w-auto h-10">
                            Try it free
                        </button>
                        <button className="bg-white text-black text-sm px-6 py-2 rounded w-full sm:w-auto h-10 flex items-center gap-2 justify-center">
                            <CirclePlay /> Listen to AI in action
                        </button>
                    </div>
                    {/* Hero Image */}
                    <div className="relative w-[20rem] h-[20rem] lg:w-[40rem] lg:h-[30rem] lg:bottom-0 lg:left-[25%] left-8 md:w-[30rem] md:h-[25rem] md:left-[23%]">
                        <Image
                            src="/hero.png"
                            alt="hero"
                            className="object-contain"
                            priority
                            fill

                        />


                        <div className="absolute lg:bottom-20 lg:left-[-30%] bottom-[-15%] left-[-40%] md:bottom-4 md:left-[-60%] ">
                            <GoogleCalendarCard />
                        </div>
                        <div className="absolute lg:bottom-60 lg:right-[-20%] bottom-30 right-[-24%] md:bottom-50 md:right-[-30%]">
                            <BookingRateCard />
                        </div>

                    </div>
                    {/* Cards: stack on mobile, absolute on md+ */}
                    
                        
                    
                </div>
            </div>
        </section>
    );
};

export default Hero;
