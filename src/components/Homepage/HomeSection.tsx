import React from "react";
import { BorderBeam } from "@/components/magicui/border-beam";
import { GradientButton } from "@/components/GradientButton";
import Image from "next/image";
import FancyBlock from "./FancyBlock";

const cards = [
  {
    title: "Custom-Built for Your Business",
    description:
      "Tailored to your enterprise — trained on internal systems, real workflows, and domain-specific data.",
    image: "/assets/lock.png",
  },
  {
    title: "Always-On Specialists",
    description:
      "24/7 digital teammates that handle requests instantly and grow smarter over time.",
    image: "/assets/timer.png",
  },
  {
    title: "Thinks, Decides, Executes",
    description:
      "Understands business context. Takes initiative. Completes tasks from start to finish.",
    image: "/assets/dna.png",
  },
];

const HomeSection = () => {
  return (
    
    <section className="w-full h-auto relative">
       <Image
              src="/svgs/radial.svg"
              alt="Brain"
              width={500}
              height={200}
              className="w-full h-full -z-10 absolute top-0 "
            />
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

      {/* Start Of Info Section */}
      <div className="w-[90%] h-auto lg:h-[100vh] mx-auto mt-10 flex flex-col items-center">
        
          <FancyBlock>
             Agentic AI
          </FancyBlock>
        <div className="mt-8 w-auto text-center">
          <h1 className="text-[var(--primary)] text-4xl">
            Your{" "}
            <span className="gradient-linear-text font-semibold">
              Differentiator
            </span>
          </h1>
          <p className="mt-4 text-lg">
            AI Agents That Think, Learn, and Deliver
          </p>
          <p className="text-lg">
            AI Agent is a new SaaS: autonomous, adaptive, and outcome-driven.
          </p>
          <p className="text-lg">
            It doesn’t just support your team — it becomes part of it.
          </p>
        </div>

        <div className="w-[90%] h-auto mt-8 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-4 px-4 py-4">
          {cards.map((card) => (
            <div key={card.title} className="w-[300px] h-[300px] flex-shrink-0">
              <div className="w-full h-[60%]">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={500}
                  height={200}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div className="px-2 mt-3 py-1 gap-2 flex flex-col items-center justify-center text-center">
                <h3 className="text-[var(--primary)] text-lg font-semibold">
                  {card.title}
                </h3>
                <p className="text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* End Of Info Section */}
    </section>
  );
};

export default HomeSection;
