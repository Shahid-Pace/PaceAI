import React from "react";
import { BorderBeam } from "@/components/magicui/border-beam";
import { GradientButton } from "@/components/GradientButton";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      {/* Start Of Hero Section */}
      <div className="w-[90%] h-auto lg:h-[85vh] mx-auto flex flex-col lg:block">
        {/* Heading */}
        <div className="w-full lg:w-[30%] text-center py-2 relative rounded-2xl overflow-hidden border-[1px] border-gray-500 mt-10 lg:mt-0  lg:top-20 mx-auto sm:top-0 left-0 lg:-left-95 2xl:-left-105 2xl:w-[40%] 2xl:py-4">
          <p className="text-lg lg:text-base">
            The future of software is here!
          </p>
          <BorderBeam
            size={70}
            initialOffset={20}
            className="from-transparent via-[var(--primary)] to-transparent"
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 20,
            }}
          />
        </div>

        <div className="w-full h-auto lg:h-[80%] flex flex-col-reverse lg:flex-row mt-6 lg:mt-8 gap-8">
          {/* Left Content */}
          <div className="w-full lg:w-[55%] flex items-center justify-center">
            <div className="w-full h-auto lg:h-3/4 flex flex-col items-center lg:items-start text-center lg:text-left px-2">
              <h1 className="text-3xl lg:text-5xl font-semibold 2xl:text-7xl">
                AI Agents built to
              </h1>
              <h1 className="text-3xl lg:text-5xl mt-3 gradient-linear-text font-semibold 2xl:text-7xl">
                serve your enterprise.
              </h1>
              <p className="w-full lg:w-[70%] mt-3 2xl:text-5xl">
                Streamline operations, boost productivity, and evolve your
                business with intelligent workflow automation agents.
              </p>

              {/* Buttons */}
              <div className="mt-6 flex flex-row sm:flex-row gap-4 items-center lg:items-start justify-center lg:justify-start 2xl:w-full">
                <GradientButton>Contact Us</GradientButton>

                <button
                  className="relative inline-block text-[var(--primary)] px-5 py-2 rounded-md bg-[var(--background)] border-[1px] border-transparent cursor-pointer"
                  style={{
                    backgroundImage: `linear-gradient(#060109, #060109), var(--gradient-linear-text)`,
                    backgroundOrigin: "border-box",
                    backgroundClip: "padding-box, border-box",
                  }}
                >
                  Watch Demo
                </button>
              </div>
            </div>
          </div>

          {/* Brain Image */}
          <div className="w-full lg:w-[45%] h-[220px] sm:h-[300px] lg:h-full">
            <Image
              src="/assets/brain.png"
              alt="Brain"
              width={500}
              height={200}
              className="w-full h-full object-contain lg:object-cover"
            />
          </div>
        </div>
      </div>
      {/* End Of Hero Section */}
    </>
  )
}

export default Hero
