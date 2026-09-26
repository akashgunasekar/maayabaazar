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
        className={cn("relative w-full py-8 flex items-center justify-center overflow-hidden", className)}
        {...props}
      >
        {/* Animated Thin Metallic Gold Line with Center Expansion */}
        <div
          style={{
            transform: isInView ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "center",
            opacity: isInView ? 1 : 0,
            transition: "transform 0.85s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease",
          }}
          className="absolute inset-0 flex items-center will-change-transform"
        >
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C99A32]/50 to-transparent" />
        </div>

        {/* Center Diamond Architectural Accent */}
        <div
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "scale(1)" : "scale(0.8)",
            transition:
              "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
          }}
          className="relative px-5 bg-[#020817] flex items-center gap-2 z-10"
        >
          <span className="w-1 h-1 rounded-full bg-[#C99A32]/60" />
          <span className="w-2.5 h-2.5 rotate-45 border border-[#C99A32] bg-[#06152F] shadow-[0_0_10px_rgba(201,154,50,0.4)]" />
          <span className="w-1 h-1 rounded-full bg-[#C99A32]/60" />
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "left center",
        opacity: isInView ? 1 : 0,
        transition: "transform 0.75s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease",
      }}
      className={cn("w-full h-px bg-gradient-to-r from-transparent via-[#C99A32]/20 to-transparent my-6 will-change-transform", className)}
      {...props}
    />
  );
};

export const GoldDivider: React.FC<Omit<DividerProps, "gold">> = (props) => (
  <Divider gold {...props} />
);
