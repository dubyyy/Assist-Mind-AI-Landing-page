import Image from "next/image";
import PlumbingServiceCard from "./PlumbingServiceCard";

const WhatItDoes = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-3.5 px-4">
      {/* Header Pill */}
      <div className="bg-[#EDEDFF] border-[#C7C6FF] border-[1.5px] w-[12rem] h-[2rem] rounded-full flex items-center justify-center">
        <p className="text-[#4A48FF]">What it does</p>
      </div>

      {/* Title */}
      <span className="text-[#060483] text-md lg:text-2xl font-bold uppercase text-center">
        Hear Your AI Agent in Action
      </span>

      {/* Scrollable Cards */}
      <div className="w-full overflow-x-auto flex justify-center items-center">
        <div className="flex flex-nowrap gap-4 py-4">
          {/* Card 1 */}
          <div className="min-w-[16rem] lg:min-w-[32rem] lg:flex">
            <div className="relative lg:w-[20rem] lg:h-[20rem]  w-[15rem] h-[15rem] mb-2">
              <Image src="/avatars-2.png" className="rounded-md" alt="" fill />
            </div>
            <PlumbingServiceCard />
          </div>

          {/* Card 2 */}
          <div className="min-w-[16rem]">
            <div className="relative w-[15rem] h-[15rem] mb-2 lg:w-[20rem] lg:h-[20rem]">
              <Image src="/avatars-1.png" className="rounded-md" alt="" fill />
            </div>
          </div>

          {/* Card 3 */}
          <div className="min-w-[16rem]">
            <div className="relative w-[15rem] h-[15rem] mb-2 lg:w-[20rem] lg:h-[20rem]">
              <Image src="/avatars-3.png" className="rounded-md" alt="" fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatItDoes;
