import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "PaceAI",
  description:
    "PaceAI delivers custom AI Agent Development Services for enterprises, including LLM agents, workflow automation, and generative AI solutions. Build secure, scalable AI agents tailored to your business needs.",
  keywords: [
    "AI Agent Development Services",
    "Enterprise AI Agents",
    "Workflow Automation Agents",
    "Generative AI Agents",
    "LLM Agents for Business",
    "Custom AI Agents",
    "AI Integration for Enterprises",
    "Business Automation with AI",
    "Secure AI Agents",
    "LLM Integration Services",
  ],
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={urbanist.variable}>
      <body>
        <Navbar />
        <main className="mt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}




