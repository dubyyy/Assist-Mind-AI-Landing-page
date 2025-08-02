import React from "react";
import { CheckCircle } from "lucide-react";

const plans = [
  {
    name: "Basic plan",
    price: "$10",
    period: "per month",
    description: "Our most popular plan.",
    features: [
      "Access to basic features",
      "Basic reporting and analytics",
      "Up to 10 individual users",
      "20 GB individual data",
      "Basic chat and email support",
    ],
    button: "Get started",
    badge: "Popular",
    highlight: false,
  },
  {
    name: "Pro popular",
    price: "$50",
    period: "per month",
    description: "Growing teams up to 20 users.",
    features: [
      "200+ integrations",
      "Advanced reporting and analytics",
      "Up to 20 individual users",
      "40 GB individual data",
      "Priority chat and email support",
    ],
    button: "Get Started",
    highlight: true,
  },
  {
    name: "Enterprise plan",
    price: "$99",
    period: "per month",
    description: "Advanced features + unlimited users.",
    features: [
      "Advanced custom fields",
      "Audit log and data history",
      "Unlimited individual users",
      "Unlimited individual data",
      "Personalized + priority service",
    ],
    button: "Get started",
    highlight: false,
  },
];

const PricingPlans: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="flex flex-col items-center mb-8">
        <span className="px-6 py-1 rounded-full bg-[#EDEDFF] text-[#4A48FF] border border-[#C7C6FF] text-base font-medium mb-4">Pricing</span>
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-2 text-black">BUILT TO AMPLIFY THE WAY YOU WORK</h2>
      </div>
      <div className="flex flex-col items-center md:flex-row justify-center gap-8 max-w-5xl mx-auto md:gap-0 lg:gap-8">
        {plans.map((plan, idx) => (
          <div
            key={plan.name}
            className={`relative flex-1 rounded-2xl border text-black shadow-md flex flex-col items-center px-6 py-8 min-w-[270px] max-w-[350px] md:scale-75 lg:scale-100 ${
              plan.highlight ? "bg-[#1614A0] text-white border-[#181E60] scale-105 z-10" : "border-[#E3E8F0]"
            }`}
          >
            {/* Badge */}
            {plan.badge && (
              <span className="absolute top-4 right-4 bg-[#F4F2FF] text-[#6B5CFF] text-xs font-semibold px-4 py-1 rounded-full">
                {plan.badge}
              </span>
            )}
            {/* Title & Price */}
            <h3 className={`text-lg font-semibold mb-2 ${plan.highlight ? "text-white" : "text-gray-900"}`}>{plan.name}</h3>
            <div className="flex items-end mb-1">
              <span className="text-4xl font-bold mr-1">{plan.price}</span>
              <span className="text-base mb-1">{plan.period}</span>
            </div>
            <div className={`mb-4 ${plan.highlight ? "text-indigo-100" : "text-gray-600"}`}>{plan.description}</div>
            {/* Button */}
            <button
              className={`w-full py-2 rounded-lg font-semibold mb-6 transition-colors duration-200 ${
                plan.highlight
                  ? "bg-white text-[#181E60] hover:bg-indigo-100"
                  : "bg-[#6B5CFF] text-white hover:bg-[#4A48FF]"
              }`}
            >
              {plan.button}
            </button>
            {/* Features */}
            <div className="text-left w-full">
              <div className="font-bold mb-2 text-base">
                FEATURES
                <div className="font-normal text-[15px] mt-1">
                  Everything in {idx === 0 ? "our free plan plus...." : idx === 1 ? "Basic plus...." : "Business plus...."}
                </div>
              </div>
              <ul className="space-y-2 mt-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-[15px]">
                    <CheckCircle size={18} className={plan.highlight ? "text-indigo-200" : "text-[#6B5CFF]"} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;
