"use client";

import React from "react";
import { useInView } from "@/lib/useInView";
import { cn } from "@/lib/utils";

export interface FadeInProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  children: React.ReactNode;
}

export const FadeIn: React.FC<FadeInProps> = ({
  direction = "up",
  delay = 0,
  duration = 500,
  className,
  children,
  ...props
}) => {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  const getTransform = () => {
    switch (direction) {
      case "up":
        return "translate3d(0, 20px, 0)";
      case "down":
        return "translate3d(0, -20px, 0)";
      case "left":
        return "translate3d(20px, 0, 0)";
      case "right":
        return "translate3d(-20px, 0, 0)";
      case "none":
        return "translate3d(0, 0, 0)";
    }
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translate3d(0, 0, 0)" : getTransform(),
        transitionProperty: "opacity, transform",
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
