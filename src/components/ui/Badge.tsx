import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "gold" | "royal" | "purple" | "neutral" | "active" | "outline" | "upcoming" | "accent";
  size?: "sm" | "md";
  showDot?: boolean;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "gold",
  size = "md",
  showDot = false,
  className,
  children,
  ...props
}) => {
  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-[10px] gap-1",
    md: "px-3 py-1 text-xs gap-1.5",
  };

  const variantStyles = {
    gold: "bg-[#06152F] text-[#C99A32] border border-[#C99A32]/35 shadow-[0_0_12px_rgba(201,154,50,0.15)]",
    accent: "bg-[#06152F] text-[#F2D477] border border-[#C99A32]/35 shadow-[0_0_12px_rgba(201,154,50,0.15)]",
    royal: "bg-[#0B2145]/60 text-[#F2D477] border border-[#C99A32]/30 shadow-[0_0_12px_rgba(11,33,69,0.35)]",
    purple: "bg-[#0B2145]/60 text-[#F2D477] border border-[#C99A32]/30", // Re-mapped from purple to royal blue & gold
    upcoming: "bg-[#0B2145]/40 text-[#F2D477] border border-[#C99A32]/40",
    neutral: "bg-[#06152F]/70 text-[#C9C4B8] border border-[#C99A32]/15",
    active: "bg-[#0B2145]/80 text-[#52C878] border border-[#52C878]/30 shadow-[0_0_12px_rgba(82,200,120,0.2)]",
    outline: "bg-transparent text-[#FFF8E8] border border-[#C99A32]/30",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center font-medium font-mono uppercase tracking-wider rounded-md select-none",
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {showDot && (
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full shrink-0",
            variant === "active" ? "bg-[#52C878] animate-pulse" : "bg-[#C99A32]"
          )}
        />
      )}
      <span>{children}</span>
    </span>
  );
};
