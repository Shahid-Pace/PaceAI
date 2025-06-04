"use client";
import React from "react";
import Image from "next/image";

const socialIcons = [
  { name: "x", src: "/assets/x.svg", href: "" },
  { name: "facebook", src: "/assets/facebook.svg", href: "" },
  { name: "insta", src: "/assets/insta.svg", href: "" },
  { name: "linkdln", src: "/assets/linkdln.svg", href: "" },
];

const Footer = () => {
  return (
    <footer className="h-auto lg:h-[80vh] w-full mt-5">
      <div className="w-[90%] mx-auto h-auto lg:h-50 flex flex-col lg:flex-row border-b-1 border-b-[var(--primary-foreground)] pb-6 lg:pb-0">
        <div className="w-full lg:w-[80%] h-full">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/navlogo.svg"
              alt="Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="text-xl font-semibold text-[var(--primary)]">
              pacewisdom
            </span>
          </div>
          <p className="w-full md:w-[75%] lg:w-[55%] mt-4 text-sm">
            Pacewidom AI delivers intelligent, outcome-driven agents that
            automate complex workflows, adapt to your business, and act like
            real teammates — not just tools..
          </p>
          <div className="w-full md:w-[70%] lg:w-[50%] flex gap-4 flex-wrap items-center justify-start mt-8">
            {socialIcons.map((icon) => (
              <a
                key={icon.name}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border-[1px] border-gray-300 flex items-center justify-center transition-all duration-300"
              >
                <Image
                  src={icon.src}
                  alt={icon.name}
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </a>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-[20%] h-full flex flex-row lg:flex-col items-start lg:items-end justify-start lg:justify-start space-x-6 lg:space-x-0 lg:space-y-6 mt-6 lg:mt-0">
          <a
            href="#home"
            className="text-sm font-medium hover:text-[var(--primary)] transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-sm font-medium hover:text-[var(--primary)] transition-colors"
          >
            About Us
          </a>
          <a
            href="#blog"
            className="text-sm font-medium hover:text-[var(--primary)] transition-colors"
          >
            Blogs
          </a>
          <a
            href="#contact"
            className="text-sm font-medium hover:text-[var(--primary)] transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
      <div className="w-full h-auto lg:h-75 mt-5">
        <div className="w-[90%] h-auto lg:h-10 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
          <p className="text-sm"> © 2025 Copyright Pacewisdom </p>
          <p className="text-sm">Privacy Policy • Terms and condition</p>
        </div>
        <div className="w-full h-auto lg:h-60 mt-8 flex items-center justify-center overflow-hidden">
          <h1 className="whitespace-nowrap text-[16vw] md:text-[16vw] lg:text-[16vw] font-bold text-gray-500 w-full text-center leading-none mx-auto">
            PaceWisdom
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
