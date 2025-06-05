'use client';

import React from "react";
import Image from "next/image";
import FancyBlock from "@/components/Homepage/FancyBlock";

// 1. Define a type for the cards
interface Card {
  title: string;
  description: string;
  image: string;
}

// 2. Array of cards with strong typing
const cards: Card[] = [
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

// 3. Component
const Glass = () => {
  return (
    <div className="w-[90%] h-auto lg:h-[100vh] mx-auto mt-10 flex flex-col items-center">
      {/* FancyBlock Section */}
      <FancyBlock>Agentic AI</FancyBlock>

      {/* Heading */}
      <div className="mt-8 w-auto text-center">
        <h1 className="text-[var(--primary)] text-4xl">
          Your{" "}
          <span className="gradient-linear-text font-semibold">
            Differentiator
          </span>
        </h1>
        <p className="mt-4 text-lg">AI Agents That Think, Learn, and Deliver</p>
        <p className="text-lg">
          AI Agent is a new SaaS: autonomous, adaptive, and outcome-driven.
        </p>
        <p className="text-lg">
          It doesn’t just support your team — it becomes part of it.
        </p>
      </div>

      {/* Cards Section */}
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
  );
};

export default Glass;
