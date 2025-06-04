"use client";
import React from "react";

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const GradientButton: React.FC<GradientButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={`cursor-pointer px-6 py-2 rounded-md text-[var(--primary)]  transition-all duration-300 ease-in-out ${className ?? ""}`}
      style={{
        backgroundImage: 'var(--gradient-linear)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundImage = 'var(--gradient-linear-hover)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundImage = 'var(--gradient-linear)';
      }}
    >
      {children}
    </button>
  );
};
