"use client";

import React, { useEffect, useRef, useState } from "react";
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
  const ref = useRef<HTMLDivElement>(null);
  // Default to visible so content is NEVER hidden if JS is loading or scroll observer delays
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0, rootMargin: "200px 0px 200px 0px" }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      className={cn(
        "transition-all ease-out will-change-transform opacity-100 translate-y-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
