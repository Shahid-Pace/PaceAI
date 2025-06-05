import React from "react";
import Image from "next/image";
import FancyBlock from "../FancyBlock";


// 1. Define a type for the cards
interface Card {
  title: string;
  description: string;
  image: string;
}


const cards: Card[] = [
  {
    title: "13+ Years in Enterprise AI",
    description:
      "Proven expertise in regulated sectors and real-world enterprise challenges.",
    image: "/assets/cloud.jpg",
  },
  {
    title: "200+ Global Deployments",
    description:
      "Trusted across industries including healthcare, logistics, and finance",
    image: "/assets/building.jpg",
  },
  {
    title: "300+ Engineers, 3 Countries",
    description:
      "Experts in LLM agents for business, secure integrations, and scalable architecture.",
    image: "/assets/glass.jpg",
  },
];

const Features = () => {
  return (
    <div className="w-[90%] h-auto lg:h-[100vh] mx-auto mt-10 flex flex-col items-center">
      <FancyBlock>Why pacewisdom AI </FancyBlock>
      <div className="mt-8 w-auto text-center">
        <h1 className="text-[var(--primary)] text-4xl">
          Not just SaaS -{" "}
          <span className="gradient-linear-text font-semibold">
            Your AI Teammate
          </span>
        </h1>
        <p className="mt-4 text-lg">
          We build autonomous agents that learn, adapt, and deliver
        </p>
        <p className="text-lg">real outcomes — at enterprise scale.</p>
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
  );
};

export default Features;
