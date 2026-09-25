"use client";

import React from "react";
import { useInView } from "@/lib/useInView";
import { cn } from "@/lib/utils";

export interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number;
  duration?: number;
  children: React.ReactNode;
}

export const Reveal: React.FC<RevealProps> = ({
  delay = 0,
  duration = 750,
  className,
  children,
  ...props
}) => {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      style={{
        clipPath: isInView ? "inset(0 0 0 0)" : "inset(0 0 100% 0)",
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translate3d(0, 0, 0)" : "translate3d(0, 16px, 0)",
        transitionProperty: "clip-path, opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      className={cn("will-change-transform", className)}
      {...props}
    >
      {children}
    </div>
  );
};
