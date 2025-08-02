import React from "react";

const testimonials = [
  {
    text: "We booked 27 appointments in the first month - without answering a single call manually. This thing just works.",
    name: "John M..",
    role: "Plumbing Contractor",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "It feels like hiring a receptionist, but one that never sleeps and never forgets a lead.",
    name: "Greg S..",
    role: "HVAC Services",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    text: "Clients love how fast we respond now. And I love the peace of mind knowing no call gets missed.",
    name: "Natalie R..",
    role: "Real Estate Office",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const TestimonialSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#f6f8ff] to-white py-16 flex flex-col items-center">
      <div className="mb-6 text-blue-500 font-medium text-lg">Testimonials</div>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
        WHAT OUR CUSTOMERS ARE <br /> SAYING
      </h2>
      <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch w-full max-w-6xl px-4">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md flex-1 p-6 flex flex-col justify-between min-w-[260px] md:scale-85 lg:scale-100"
          >
            <div className="text-gray-700 mb-6">{t.text}</div>
            <div className="flex items-center gap-4 mt-auto">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-12 h-12 rounded-full border-2 border-blue-100 object-cover shadow-lg"
              />
              <div>
                <div className="font-semibold text-gray-900 text-base">{t.name}</div>
                <div className="text-sm text-gray-500">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-8">
        <span className="w-3 h-3 rounded-full bg-gray-300"></span>
        <span className="w-3 h-3 rounded-full bg-blue-400"></span>
        <span className="w-3 h-3 rounded-full bg-gray-300"></span>
      </div>
    </section>
  );
};

export default TestimonialSection;
