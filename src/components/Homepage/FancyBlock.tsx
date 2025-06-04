"use client";

import Image from "next/image";
import { BorderBeam } from "@/components/magicui/border-beam"; // ✅ Correct path
import { ReactNode } from "react";

interface FancyBlockProps {
  readonly children: ReactNode;
  readonly className?: string;
}

export default function FancyBlock({ children, className = "" }: FancyBlockProps) {
  return (
    <div
      className={`inline-flex items-center justify-center gap-2 text-center px-4 py-2 relative rounded-3xl overflow-hidden border border-gray-500 mt-4 mx-auto
      flex-wrap sm:flex-nowrap w-auto max-w-full text-sm sm:text-base min-h-[40px] sm:min-h-[44px] ${className}`}
    >
      <Image
        src="/logo.svg"
        alt="Logo"
        width={16}
        height={16}
        className="w-4 h-4"
      />
      <span className="whitespace-nowrap leading-tight">{children}</span>
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
  );
}
