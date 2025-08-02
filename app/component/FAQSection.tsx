"use client";
import React, { useState } from "react";
import { ColoredCircleCheck } from "./ColoredCircleCheck";
import { CircleMinus } from "lucide-react"; // ✅ Already imported

const faqs = [
  {
    q: "How human-like is the AI voice?",
    a: "Our AI supports ultra-realistic voices with natural tone, pacing, and pauses. Most callers can't tell it's not a real person.",
  },
  {
    q: "Can I customize what my agent says?",
    a: "Yes. You have full control over scripts, logic, and can flesh out any scenario via our no-code editor – no coding needed.",
  },
  {
    q: "What if a caller asks something unexpected?",
    a: "Your agent can redirect the chat, take messages, or escalate to a human based on your preferences. You stay in control.",
  },
  {
    q: "How fast can I get started?",
    a: "You can get launched in 15 minutes. Just answer a few questions, connect your platform, and assign your AI agent.",
  },
  {
    q: "Does it work with my current phone number?",
    a: (
      <ul className="list-disc pl-5 space-y-1 text-sm">
        <li><ColoredCircleCheck /> No number porting required – Set calls directly to your AI agent. Inbound incoming calls auto-beautifully handled by AI.</li>
        <li><ColoredCircleCheck /> Voicemail forwarding – Stays available when you want, all after-hours, and internationally. (Recommended for fast onboarding!)</li>
        <li><ColoredCircleCheck /> AI can answer all or some calls, or only by a specific keyword.</li>
        <li><ColoredCircleCheck /> No carrier changes required.</li>
        <li><ColoredCircleCheck /> Works with all major carriers.</li>
        <li><ColoredCircleCheck /> No impact to your number of storage.</li>
        <li><ColoredCircleCheck /> AI can handle hundreds of concurrent ring – it takes just a few minutes.</li>
      </ul>
    ),
  },
  {
    q: "Can it handle multiple calls at once?",
    a: "Absolutely. Unlike voicemail, your AI Agent can manage unlimited simultaneous call routes–no busy signals ever.",
  },
  {
    q: "What happens if our system or network goes down?",
    a: "No missed opportunities–our system is cloud-based, anticipating and auto-resuming business continuity for you.",
  },
  {
    q: "Does it integrate with my calendar or CRM?",
    a: "Yes, we integrate with platforms like Google Calendar, GoHighLevel, Calendly, and more – your agent updates everything live.",
  },
  {
    q: "How much does it cost?",
    a: "See our pricing section above for details.",
  },
  {
    q: "What if I want to change the voice or edit rules?",
    a: "You can switch voices, update responses, or even create new phone rules through your dashboard.",
  },
];

const FAQSection: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="flex flex-col items-center mb-8">
        <span className="px-6 py-1 rounded-full bg-[#EDEDFF] text-[#4A48FF] border border-[#C7C6FF] text-base font-medium mb-4">FAQ</span>
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2 text-black">Frequently Asked Questions</h2>
      </div>
      <div className="max-w-3xl mx-auto rounded-2xl bg-white/80 shadow-lg divide-y divide-[#F0F1F6]">
        {faqs.map((f, i) => (
          <div key={i}>
            <button
              className="w-full flex justify-between items-center py-5 px-6 focus:outline-none text-left"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span className="font-medium text-base md:text-lg text-[#181E60]">{f.q}</span>
              <CircleMinus
                className={`text-black transition-transform duration-200 ${open === i ? "rotate-180 text-[#4A48FF]" : "rotate-0 text-gray-400"}`}
                size={44}
                strokeWidth={0.5}
              />
            </button>
            {open === i && (
              <div className="px-6 pb-6 text-gray-700 text-[15px]">
                {typeof f.a === "string" ? <span>{f.a}</span> : f.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
