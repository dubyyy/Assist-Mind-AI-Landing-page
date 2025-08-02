import React from "react";

const VoiceCTA: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto my-12 px-4">
      <div className="rounded-2xl bg-gradient-to-r from-[#181E60] to-[#1B2CC1] relative overflow-hidden p-10 md:p-20 flex flex-col items-center text-center">
        {/* Grid overlay */}
        <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
          <svg width="100%" height="100%" className="w-full h-full" style={{position:'absolute',top:0,left:0}}>
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3F7DFB" strokeWidth="1" opacity="0.20" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 z-10">
          READY TO WORK SMARTER WITH<br />VOICE?
        </h2>
        <p className="text-lg text-indigo-100 mb-8 z-10">
          Start automating tasks, scheduling meetings, and syncing data — all by speaking naturally.
        </p>
        <button
          className="bg-white text-[#181E60] font-semibold rounded-lg px-8 py-3 focus:outline-none hover:bg-indigo-50 transition-colors duration-200 z-10"
        >
          Try it for free
        </button>
      </div>
    </section>
  );
};

export default VoiceCTA;
