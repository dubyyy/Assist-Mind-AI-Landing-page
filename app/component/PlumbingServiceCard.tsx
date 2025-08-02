"use client";
import { useState } from "react";
import { Play } from "lucide-react";

const PlumbingServiceCard = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // You can connect this to actual audio logic
  };

  return (
    <div className="max-w-xs bg-white p-5 rounded-xl shadow-md">
      {/* Category Badge */}
      <div className="inline-block bg-indigo-600 text-white text-sm px-3 py-1 rounded-md mb-3 font-medium">
        Plumbing
      </div>

      {/* Title */}
      <h2 className="text-xl text-black font-semibold mb-2">Plumbing Service</h2>

      {/* Description */}
      <p className="text-gray-700 mb-4">
        Hi there! Thanks for calling FlowFix Plumbing. We have a technician
        available today at 2 PM or tomorrow morning — which works best for you?
      </p>

      {/* Audio Player */}
      <div className="flex items-center gap-3 bg-gray-100 px-3 py-2 rounded-md">
        <button
          onClick={togglePlay}
          className="text-indigo-600 hover:text-indigo-800"
        >
          <Play className="w-5 h-5" />
        </button>
        <div className="relative w-full h-2 bg-gray-300 rounded-full overflow-hidden">
          <div
            className="absolute h-full bg-indigo-600"
            style={{ width: "50%" }} // simulate progress
          />
        </div>
        <span className="text-sm text-gray-600 whitespace-nowrap">1m 12s</span>
      </div>
    </div>
  );
};

export default PlumbingServiceCard;
