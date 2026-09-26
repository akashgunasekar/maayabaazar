import React from "react";
import { cn } from "@/lib/utils";

export interface SurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "base" | "elevated" | "subtle" | "muted" | "glass";
  interactive?: boolean;
  glow?: "accent" | "active" | "none";
}

export const Surface = React.forwardRef<HTMLDivElement, SurfaceProps>(
  (
    {
      children,
      variant = "base",
      interactive = false,
      glow = "none",
      className,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      base: "bg-[#06152F] border border-[#C99A32]/20",
      elevated: "bg-[#0B2145] border border-[#C99A32]/30 shadow-xl",
      subtle: "bg-[#040F22] border border-[#C99A32]/10",
      muted: "bg-[#020817] border border-[#C99A32]/10",
      glass: "bg-[#06152F]/80 backdrop-blur-md border border-[#C99A32]/20",
    };

    const glowStyles = {
      none: "",
      accent: "shadow-[0_0_40px_-10px_rgba(201,154,50,0.25)]",
      active: "shadow-[0_0_35px_-10px_rgba(82,200,120,0.2)]",
    };

    const interactiveStyles = interactive
      ? "transition-all duration-300 hover:border-[#C99A32]/50 hover:bg-[#0B2145] hover:-translate-y-0.5 cursor-pointer"
      : "";

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl",
          variantStyles[variant],
          glowStyles[glow],
          interactiveStyles,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Surface.displayName = "Surface";
