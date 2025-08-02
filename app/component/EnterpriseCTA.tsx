import React from "react";

const EnterpriseCTA: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto my-12 px-4">
      <div className="rounded-2xl bg-gradient-to-r from-[#181E60] to-[#1B2CC1] p-10 md:p-20 flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          NEED A CUSTOM AI SOLUTION FOR<br />YOUR ENTERPRISE TEAM?
        </h2>
        <p className="text-lg text-indigo-100 mb-8">
          Let’s tailor AssistMind AI to your workflow.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            className="bg-[#4A48FF] text-white font-semibold rounded-lg px-8 py-3 focus:outline-none hover:bg-[#3735b8] transition-colors duration-200"
          >
            Request a Quote
          </button>
          <button
            className="bg-white text-[#181E60] font-semibold rounded-lg px-8 py-3 border border-[#E3E8F0] focus:outline-none hover:bg-indigo-50 transition-colors duration-200"
          >
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseCTA;
