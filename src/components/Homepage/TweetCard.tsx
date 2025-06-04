"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const reviews = [
  {
    name: "Lionel Messi",
    username: "@CTO, Healthcare Provider",
    body: "We replaced three siloed clinical tools with a single Agent AI that now handles documentation, intake, and compliance. It’s like hiring a 24/7 assistant with a medical degree.",
    img: "",
  },
  {
    name: "Cristiano Ronaldo",
    username: "@VP Product, Fintech Startup",
    body: "Our KYC agents now handle ID verification and regulatory flagging in under 60 seconds. No tickets. No delays. Just clean, compliant onboarding.",
    img: "",
  },
  {
    name: "Kylian Mbappe",
    username: "@Head of Operations, Global Supply Chain Co",
    body: "Logistics used to be chaos. Now the agent flags shipment delays before they happen. It talks to both our TMS and support systems — we didn't know AI could do that.",
    img: "",
  },
  {
    name: "Kevin De Bruyne",
    username: "@CIO, Manufacturing Enterprise",
    body: "We launched our first AI procurement agent in 8 days. It talks to our ERP, checks vendor SLAs, and even fills invoice metadata. It just works.",
    img: "",
  },
  {
    name: "Erling Haaland",
    username: "@CEO, Tata",
    body: "It's more than automation — it's intelligence. Our workflows are smarter, faster, and more responsive than ever.",
    img: "",
  },
  {
    name: "Neymar Jr.",
    username: "@Manager",
    body: "We're using AI agents in places we never thought possible. It’s quietly reshaping how our teams operate.",
    img: "",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div
      className={cn(
        "relative h-full w-[300px] cursor-pointer overflow-hidden rounded-2xl border p-5 mx-2",
        "bg-[var(--secondary)] text-[var(--primary)] shadow-md border-gray-600"
      )}
    >
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={img} alt={name} />
            <AvatarFallback className="text-[var(--background)]">{initials}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-[var(--primary)] font-semibold text-base">
              {name}
            </h3>
            <p className="text-sm text-[var(--primary-foreground)]">
              {username}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Image
          src="/assets/quote.svg"
          alt="quote"
          width={20}
          height={20}
          className="mb-2"
        />
        <p className="text-sm text-[var(--primary)]">{body}</p>
      </div>
    </div>
  );
};

export function TweetCard() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-10 my-8">
      <Marquee pauseOnHover className="[--duration:25s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:25s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
    </div>
  );
}
