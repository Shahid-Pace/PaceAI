import React from "react";
import FancyBlock from "../Homepage/FancyBlock";
import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const industryFaqs = [
  {
    title: "Healthcare",
    description:
      "From faster trials to better care — AI agents built for healthcare operations and regulatory alignment.",
    points: [
      "Clinical Documentation Copilot",
      "Regulatory Filing Assistant (IDMP, RIM)",
      "Claims Reconciliation Agent",
      "Patient Intake & Triage Bot",
      "Drug Recall & Supply Chain Monitor",
    ],
    image: "/assets/docter.jpg",
  },
  {
    title: "Fintech",
    description:
      "Reduce operational cost, drive compliance, and enhance engagement with financial AI agents.",
    points: [
      "KYC / AML Validator",
      "Loan Application Assistant",
      "Investment Recommendation Bot",
      "Regulatory Report Generator",
      "Invoice & Payment Tracker",
    ],
    image: "/assets/fintech.jpg",
  },
  {
    title: "Supply Chain",
    description:
      "From warehouse to last mile — LLM agents for business that keep your supply chain lean and agile.",
    points: [
      "Delay Prediction & ETA Management",
      "Procurement Optimization Agent",
      "Freight Claims & Cost Audit Bot",
      "WMS + TMS Copilot",
      "Order Flow & Exception Handler",
    ],
    image: "/assets/logistics.jpg",
  },
];
const Agents = () => {
  return (
    <div className="w-[90%] h-auto lg:h-auto mx-auto  flex flex-col relative">
      <Image
        src="/svgs/radial.svg"
        alt="Brain"
        width={500}
        height={200}
        className="w-full h-full -z-10 absolute  bottom-50 "
      />
      <FancyBlock> Domains We Power </FancyBlock>
      <div className="mt-8 w-auto text-center">
        <h1 className="text-[var(--primary)] text-4xl">
          Specialist{" "}
          <span className="gradient-linear-text font-semibold">Agents</span> for
          Every Industry
        </h1>
        <p className="mt-4 text-lg">
          Our enterprise AI agents are trained to understand your sector’s
          processes, language, and
        </p>
        <p className="text-lg">
          compliance needs — delivering value from day one.
        </p>
      </div>

      <div className="w-[90%] mx-auto mt-8 mb-20">
        <Accordion type="single" collapsible>
          {industryFaqs.map((item, index) => (
            <AccordionItem key={item.title} value={`industry-${index}`}>
              <AccordionTrigger className="text-xl font-semibold justify-between">
                <div className="flex items-center gap-5">
                  <Image
                    src="/logo.svg"
                    alt="logo"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  <span>{item.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col lg:flex-row gap-6 items-start">
                  <div className="w-full lg:w-[45%]">
                    <p className="mb-4 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                    <ul className="space-y-2 text-sm">
                      {item.points.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2 text-[var(--primary)]">→</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full lg:w-[55%]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={800}
                      height={600}
                      className="w-full h-auto rounded-xl object-cover"
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Agents;
