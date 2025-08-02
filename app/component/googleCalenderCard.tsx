"use client";
import { useState } from 'react';
import { CheckCircle, Calendar } from 'lucide-react';

const GoogleCalendarCard = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="
      transform scale-[0.45] 
      sm:scale-[0.6] 
      md:scale-[0.5] 
      lg:scale-100 
      origin-top 
      w-full max-w-xs sm:max-w-sm md:max-w-md 
      p-4 sm:p-5 
      bg-white 
      rounded-xl 
      shadow-md 
      border border-gray-200 
      relative
    ">
      {/* Status Pill */}
      <div className="absolute top-3 right-3 bg-green-100 text-green-700 text-[10px] sm:text-xs font-medium px-2 py-0.5 rounded-full">
        {isActive ? 'Active' : 'Inactive'}
      </div>

      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <div className="bg-indigo-100 p-2 rounded-full">
          <Calendar className="text-indigo-600 w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        <h2 className="text-sm sm:text-base font-semibold">Google Calendar</h2>
      </div>

      {/* Subtext */}
      <p className="text-xs sm:text-sm text-gray-500 mb-3">
        Schedules appointments in Google Calendar with real-time sync.
      </p>

      {/* Key Features */}
      <div className="mb-4">
        <h3 className="text-xs sm:text-sm font-medium mb-1">Key Features:</h3>
        <ul className="space-y-1.5 text-xs sm:text-sm text-gray-700">
          {[
            "Real-time sync",
            "Conflict avoidance",
            "Auto-create event w/ details",
            "Sends confirmation/reminders",
          ].map((feature, i) => (
            <li key={i} className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2">
        <button className="bg-indigo-600 text-white text-xs font-medium px-4 py-1.5 rounded-md hover:bg-indigo-700">
          Configure
        </button>
        <button className="border border-gray-300 text-gray-700 text-xs font-medium px-4 py-1.5 rounded-md hover:bg-gray-50">
          Test
        </button>
        <button className="text-red-500 text-xs font-medium hover:underline">
          Disconnect
        </button>
      </div>
    </div>
  );
};

export default GoogleCalendarCard;
