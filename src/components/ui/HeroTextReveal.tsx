import React from "react";
import { cn } from "@/lib/utils";

export interface HeroTextRevealProps {
  lines: Array<{
    text: string;
    gradient?: boolean;
    className?: string;
  }>;
  as?: "h1" | "h2" | "div";
  delay?: number;
  className?: string;
}

/**
 * Server-rendered, zero-hydration cinematic text reveal.
 * Driven by pure GPU-accelerated CSS keyframe animations for instant FCP & LCP.
 */
export const HeroTextReveal: React.FC<HeroTextRevealProps> = ({
  lines,
  as: Component = "h1",
  delay = 100,
  className,
}) => {
  return (
    <Component
      className={cn(
        "font-[var(--font-heading)] font-black tracking-tight leading-[1.08] antialiased",
        className
      )}
    >
      {lines.map((line, idx) => {
        const lineDelay = delay + idx * 180;
        return (
          <span key={idx} className="block overflow-hidden py-1">
            <span
              style={{
                animationDelay: `${lineDelay}ms`,
              }}
              className={cn(
                "block will-change-transform animate-hero-text",
                line.gradient &&
                  "text-transparent bg-clip-text bg-gradient-to-r from-[#FAF8F2] via-[#F4D76A] to-[#D4A72C]",
                line.className
              )}
            >
              {line.text}
            </span>
          </span>
        );
      })}
    </Component>
  );
};
