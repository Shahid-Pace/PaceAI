"use client";

import { GradientButton } from "./GradientButton";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav
        className="w-full fixed top-0 left-0 right-0 z-40 px-6 lg:px-16 py-6 
    bg-[rgba(6,1,9,0.4)] backdrop-blur-md supports-[backdrop-filter]:bg-[rgba(6,1,9,0.4)]"
      >
        <Image
          src="/svgs/radial.svg"
          alt="Brain"
          width={500}
          height={200}
          className="w-100 h-100 -z-10 absolute -top-30  -left-50 rounded-full"
        />
        <div className="flex items-center justify-between">
          {/* Left side - Logo and Brand */}
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

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-10">
              <a
                href="#home"
                className="text-sm font-medium hover:text-[var(--primary)] transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                About Us
              </a>
              <a
                href="#blog"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Blogs
              </a>
              <GradientButton>Contact Us</GradientButton>
            </div>
          </div>

          {/* Mobile Menu Button - Shown only on mobile */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2"
            aria-label="Toggle mobile menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <button
            className="fixed inset-0 bg-black/50"
            onClick={toggleMobileMenu}
          />

          {/* Drawer */}
          <div className="fixed inset-0 bg-[var(--background)]">
            {/* Close Button */}
            <div className="flex justify-end p-6">
              <button
                onClick={toggleMobileMenu}
                className="p-2"
                aria-label="Close mobile menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Navigation Content */}
            <div className="flex flex-col items-center justify-center h-full space-y-8 -mt-50">
              <a
                href="#home"
                className="text-lg font-medium hover:text-[var(--primary-foreground)] text-[var(--primary)] transition-colors"
                onClick={toggleMobileMenu}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-lg font-medium hover:text-[var(--primary-foreground)] text-[var(--primary)] transition-colors"
                onClick={toggleMobileMenu}
              >
                About Us
              </a>
              <a
                href="#blog"
                className="text-lg font-medium hover:text-[var(--primary-foreground)] text-[var(--primary)] transition-colors"
                onClick={toggleMobileMenu}
              >
                Blogs
              </a>

              <div className="pt-4">
                <GradientButton onClick={toggleMobileMenu}>
                  Contact Us
                </GradientButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
