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
      base: "bg-[#1C1F26] border border-white/[0.08]",
      elevated: "bg-[#242831] border border-white/[0.12] shadow-xl",
      subtle: "bg-[#14171D] border border-white/[0.05]",
      muted: "bg-[#101217] border border-white/[0.04]",
      glass: "bg-[#1C1F26]/80 backdrop-blur-md border border-white/[0.08]",
    };

    const glowStyles = {
      none: "",
      accent: "shadow-[0_0_40px_-10px_rgba(214,179,106,0.15)]",
      active: "shadow-[0_0_35px_-10px_rgba(82,200,120,0.2)]",
    };

    const interactiveStyles = interactive
      ? "transition-all duration-300 hover:border-[#D6B36A]/40 hover:bg-[#242831] hover:-translate-y-0.5 cursor-pointer"
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
