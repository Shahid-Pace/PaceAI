import React from "react";
import FancyBlock from "../FancyBlock";
import Image from "next/image";

// 1. Define a type for the cards
interface Feature {
  icon:string
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "minibrain",
    title: "Trained on Your Data",
    description:
      "Custom enterprise AI agents fine-tuned using internal documents, ERP systems, and CRMs.",
  },
  {
    icon: "shield",
    title: "Enterprise-Grade Security",
    description:
      "VPC deployment, encrypted tokens, RBAC, SSO, audit trails — ISO 27001 and GDPR aligned.",
  },
  {
    icon: "connector",
    title: "Flexible Interfaces",
    description:
      "Web, mobile, Teams, extensions — or embedded in your enterprise stack.",
  },
  {
    icon: "rocket",
    title: "Launch-Ready in Days",
    description:
      "Go live in 10 days. AI agents that deliver results from the start.",
  },
  {
    icon: "stack",
    title: "Full Agent Control",
    description:
      "Admin dashboards, continuous feedback loops, and live model monitoring for full visibility.",
  },
];

const MoreInfo = () => {
  return (
    <div className="w-[90%] h-auto lg:h-[100vh] mx-auto mt-10 flex flex-col items-center">
      <FancyBlock>Technical & Deployment</FancyBlock>
      <div className="mt-8 w-auto text-center">
        <h1 className="text-[var(--primary)] text-4xl">
          Secure,{" "}
          <span className="gradient-linear-text font-semibold">Scalable</span> ,
          Seamless
        </h1>
        <p className="mt-4 text-lg">
          Manage and scale generative AI agent confidently — with
        </p>
        <p className="text-lg">
          with everything your business needs, built-in.
        </p>
      </div>

      <div className="w-[90%] h-auto mt-8 mx-auto px-10 ">
        {/* First row with 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
          {features.slice(0, 3).map((feature) => (
            <div
              key={feature.icon}
              className="flex flex-col items-center text-center rounded-xl p-4 w-full max-w-[260px] bg-transparent"
            >
              <div className="border-gradient-linear bg-[var(--secondary)] p-3 w-15 h-15 rounded-full mb-3 flex items-center justify-center">
                <Image
                  src={`/svgs/${feature.icon}.svg`}
                  alt={feature.title}
                  width={20}
                  height={20}
                  className="text-[var(--primary)]"
                />
              </div>
              <h3 className="text-base font-semibold text-[var(--primary)] mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-[var(--primary-foreground)]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Second row centered */}
        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          {features.slice(3).map((feature) => (
            <div
              key={feature.icon}
              className="flex flex-col items-center text-center rounded-xl p-4 w-full max-w-[260px]"
            >
              <div className="border-gradient-linear bg-[var(--secondary)] p-3 w-15 h-15 rounded-full mb-3 flex items-center justify-center">
                <Image
                  src={`/svgs/${feature.icon}.svg`}
                  alt={feature.title}
                  width={20}
                  height={20}
                  className="text-[var(--primary)]"
                />
              </div>
              <h3 className="text-base font-semibold text-[var(--primary)] mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-[var(--primary-foreground)]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
