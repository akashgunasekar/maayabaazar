"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/lib/useInView";

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  accent?: boolean;
  gold?: boolean;
}

export const Divider: React.FC<DividerProps> = ({
  accent = false,
  gold = false,
  className,
  ...props
}) => {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  if (gold || accent) {
    return (
      <div
        ref={ref}
        className={cn("relative w-full py-6 flex items-center justify-center overflow-hidden", className)}
        {...props}
      >
        {/* Animated Gold Line with Center Expansion */}
        <div
          style={{
            transform: isInView ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "center",
            opacity: isInView ? 1 : 0,
            transition: "transform 0.85s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease",
          }}
          className="absolute inset-0 flex items-center will-change-transform"
        >
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4A72C]/40 to-transparent" />
        </div>

        {/* Center Jewel Icon / Emblem */}
        <div
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "scale(1)" : "scale(0.8)",
            transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
          }}
          className="relative px-4 bg-[#08050D] flex items-center gap-2 z-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4A72C]/60" />
          <span className="w-2.5 h-2.5 rotate-45 border border-[#D4A72C] bg-[#16091F] shadow-[0_0_8px_rgba(212,167,44,0.4)]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4A72C]/60" />
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "left",
        opacity: isInView ? 1 : 0,
        transition: "transform 0.75s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease",
      }}
      className={cn("w-full border-t border-[#FAF8F2]/[0.08] my-8 sm:my-12 will-change-transform", className)}
      {...props}
    />
  );
};

export const GoldDivider: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
  <Divider gold {...props} />
);

