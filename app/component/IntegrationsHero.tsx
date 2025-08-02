import React from 'react';
import { CircleCheck } from 'lucide-react';
interface Feature {
  icon: React.ReactNode;
  title: string;
}

interface IntegrationsHeroProps {
  imageSrc?: string;
}

const features: Feature[] = [
  {
    icon: <CircleCheck />,
    title: 'Real-time call-to-calendar sync',
  },
  {
    icon: <CircleCheck />,
    title: 'Auto-push lead data into CRMs',
  },
  {
    icon: <CircleCheck />,
    title: 'Secure webhook & API integrations',
  },
];

const IntegrationsHero: React.FC<IntegrationsHeroProps> = ({ imageSrc }) => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center bg-gradient-to-r from-[#181E60] to-[#1B2CC1] p-10 md:p-12 my-10 max-w-7xl mx-auto min-h-[400px] shadow-xl">
      <div className="flex-1 text-white md:pr-10">
        <div className="bg-[#EDEDFF] text-[#4A48FF] border border-[#C7C6FF] border-2 py-1.5 px-4 rounded-full w-[12rem] flex justify-center items-center">
          <span className="text-md">
            Integrate
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-light leading-tight mt-8">
          INTEGRATE YOUR VOICE<br />AGENT WITH LEADING<br />TOOLS
        </h1>
        <p className="mt-7 mb-8 text-lg text-indigo-100 max-w-xl">
          Instantly sync your AI assistant with essential business platforms like Google Calendar, GoHighLevel, Calendly, and Webhooks.
        </p>
        <ul className="space-y-4">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center">
              {feature.icon}
              <span className="ml-3 text-base">{feature.title}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
        
      </div>
    </section>
  );
};

export default IntegrationsHero;
