import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


// 1. Define a type for the cards
interface Faq {
  question:string;
  answer:string;
}

const faqs: Faq[] = [
  {
    question: "What is an AI Agent and how is it different from a chatbot?",
    answer:
      "AI agents reason, act, and integrate with systems. They complete tasks — not just answer questions.",
  },
  {
    question: "Can you build industry-specific agents?",
    answer:
      "Yes. Our enterprise AI agents are built to fit your workflows, compliance, and internal tools.",
  },
  {
    question: "What’s the typical implementation time?",
    answer: `Q&A Agents: 2–4 weeks\n\nWorkflow Automation Agents: 6–10 weeks\n\nMulti-agent Systems: 10–12+ weeks`,
  },
  {
    question: "What integrations are supported?",
    answer: "Salesforce, SAP, Oracle, Azure, AWS, GCP, Odoo, and custom APIs.",
  },
  {
    question: "How do you ensure data security?",
    answer:
      "Private hosting, encryption, role-based access, audit logs, ISO and GDPR frameworks.",
  },
  {
    question: "What models do you work with?",
    answer:
      "OpenAI, Azure OpenAI, LLaMA 2/3, Mistral, Claude, Falcon, and Ollama (private deployments).",
  },
  {
    question: "Can agents retrain on new data?",
    answer:
      "Yes — using ingestion portals, feedback loops, and adaptive RAG techniques.",
  },
  {
    question: "What’s the cost structure?",
    answer:
      "Starts at $20,000 per use case. Pilot programs and usage-based models available.",
  },
  {
    question: "Do you offer MLOps & hosting?",
    answer:
      "Yes — with live model monitoring, versioning, retraining, and scale deployment.",
  },
];

const Faq = () => {
  return (
    <div className="w-[90%] h-auto mt-10 mx-auto">
      <h1 className="text-[var(--primary)] font-semibold">
        Frequently Asked Questions
      </h1>
      <div className="w-full mx-auto mt-4">
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>
                {faq.answer.split("\n").map((line, i) => (
                  <p key={i} className="mb-2">
                    {line}
                  </p>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
