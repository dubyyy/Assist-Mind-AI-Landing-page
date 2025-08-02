import { ArrowDownRight } from "lucide-react";

const BookingRateCard = () => {
  return (
    <div className="
      transform scale-[0.5] 
      sm:scale-75 
      md:scale-[0.65] 
      lg:scale-100 
      origin-top 
      max-w-xs 
      p-4 
      bg-white 
      rounded-2xl 
      shadow 
      border border-gray-200 
      relative
    ">
      {/* Change Badge */}
      <div className="absolute top-3 right-3 bg-red-100 text-red-600 text-xs font-medium px-2 py-0.5 rounded-full flex items-center space-x-1">
        <span>+2.3%</span>
        <ArrowDownRight className="w-3 h-3" />
      </div>

      {/* Title */}
      <h3 className="text-sm font-medium text-gray-800 mb-1">Booking Rate</h3>

      {/* Value */}
      <p className="text-2xl font-bold text-gray-900 mb-1">68.5%</p>

      {/* Subtitle */}
      <p className="text-xs text-gray-500">% of calls successfully answered</p>
    </div>
  );
};

export default BookingRateCard;
