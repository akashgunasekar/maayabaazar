import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "surface" | "interactive" | "flat" | "bordered" | "goldFrame";
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
    surface:
      "bg-[#06152F]/90 backdrop-blur-md border border-[#C99A32]/20 shadow-[0_8px_32px_rgba(2,8,23,0.7)]",
    interactive:
      "bg-[#06152F]/80 backdrop-blur-md border border-[#C99A32]/20 hover:border-[#C99A32]/50 hover:bg-[#06152F] hover:shadow-[0_12px_36px_rgba(2,8,23,0.85),0_0_24px_rgba(11,33,69,0.45),0_0_12px_rgba(201,154,50,0.15)] hover-lift cursor-pointer",
    flat:
      "bg-[#020817]/95 border border-[#C99A32]/15 shadow-sm",
    bordered:
      "bg-transparent border border-[#C99A32]/30 hover:border-[#C99A32]/60 hover:bg-[#06152F]/30",
    goldFrame:
      "bg-[#06152F]/90 border border-[#C99A32]/40 relative gold-frame shadow-[0_12px_36px_rgba(2,8,23,0.8)]",
  };

  return (
    <div
      className={cn(
        "rounded-xl p-6 sm:p-8 transition-all duration-300 relative overflow-hidden",
        variantStyles[variant],
        glow && "shadow-[0_0_30px_rgba(201,154,50,0.2)] border-[#C99A32]/40",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
