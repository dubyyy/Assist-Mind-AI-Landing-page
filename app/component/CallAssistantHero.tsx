"use client";

import React from "react";
import { ColoredCircleCheck } from "./ColoredCircleCheck";
import Image from "next/image";

const CallAssistantHero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 py-12 max-w-7xl mx-auto gap-10">
      
      {/* Left Content */}
      <div className="max-w-xl">
        <button className="text-sm bg-[#EDEDFF] text-[#4D4CFF] font-medium px-4 py-1.5 rounded-full mb-4">
          Talk To Work Smarter
        </button>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          SMARTER THAN A VOICEMAIL.<br />
          CHEAPER THAN A RECEPTIONIST.
        </h1>

        <ul className="space-y-4 text-gray-700 text-base">
          <li className="flex items-start">
            <span className="text-blue-600 mr-2"><ColoredCircleCheck /></span> Human-like conversations with smart pauses
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2"><ColoredCircleCheck /></span> 24/7 call handling with custom flows
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2"><ColoredCircleCheck /></span> Appointment booking & lead qualification
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2"><ColoredCircleCheck /></span> CRM & calendar integrations
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2"><ColoredCircleCheck /></span> Transcripts and summaries sent instantly
          </li>
        </ul>
      </div>

      {/* Right Image */}
      <div className="relative w-full lg:w-[55%] lg:h-[25rem] h-[15rem] w-[20rem]">
        <Image
          src="/assistant-dashboard.png" // Save your uploaded image as `public/assistant-dashboard.png`
          alt="Call Assistant Dashboard"
          className="rounded-xl shadow-md w-full"
          fill
        />
      </div>
    </section>
  );
};

export default CallAssistantHero;
