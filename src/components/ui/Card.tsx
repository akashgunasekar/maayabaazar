import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "surface" | "interactive" | "flat" | "bordered";
  glow?: boolean;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  variant = "interactive",
  glow = false,
  className,
  children,
  ...props
}) => {
  const variantStyles = {
    surface: "bg-[#16091F] border border-[#FAF8F2]/[0.08]",
    interactive:
      "bg-[#16091F] border border-[#FAF8F2]/[0.08] hover-lift cursor-pointer",
    flat: "bg-[#0E0614] border border-[#FAF8F2]/[0.05]",
    bordered: "bg-transparent border border-[#D4A72C]/20 hover:border-[#D4A72C]/50",
  };

  return (
    <div
      className={cn(
        "rounded-3xl p-6 sm:p-8 transition-all duration-300 relative overflow-hidden",
        variantStyles[variant],
        glow && "glow-purple",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
