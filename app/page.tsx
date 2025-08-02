import "./globals.css"
import Hero from "./component/hero";
import CarouselSection from "./component/CarouselSection";
import WhatItDoes from "./component/WhatItDoes";
import CallAssistantHero from "./component/CallAssistantHero";
import HowItWorks from "./component/HowItWorks";
import IntegrationsHero from "./component/IntegrationsHero";
import PricingPlans from "./component/PricingPlans";
import EnterpriseCTA from "./component/EnterpriseCTA";
import FAQSection from "./component/FAQSection";
import VoiceCTA from "./component/VoiceCTA";
import Footer from "./component/Footer";
import ComparisonTable from "./component/ComparisonTable";
import TestimonialSection from "./component/TestimonialSection";

export default function Home() {
  return (
    <div className="bg-[#ffffff] overflow-x-hidden">
        <Hero />
        <CarouselSection />
        <WhatItDoes />
        <CallAssistantHero />
        <HowItWorks />
        <div className="p-6 bg-white min-h-screen flex flex-col items-center justify-center gap-3">
             <div className="bg-[#EDEDFF] text-sm text-[#4A48FF] mb-2 px-4 py-1 border border-[#C7C6FF] border-[2px] rounded-full w-[8rem] flex items-center justify-center  ">
                Features
            </div>
            <span className="flex flex-col items-center justify-center gap-1 text-black">
              <span className="text-4xl ">Wondering If an AI Agent Is</span>
              
              <span className="text-4xl">Worth It? Check This Out.</span>
            </span>
            <ComparisonTable />
         </div>
        <TestimonialSection />
        <IntegrationsHero />
        <PricingPlans />
        <EnterpriseCTA />
        <FAQSection />
        <VoiceCTA />
        <Footer />
        
    </div>   

  );
}
