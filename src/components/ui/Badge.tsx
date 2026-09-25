import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "gold" | "purple" | "neutral" | "active" | "outline" | "upcoming" | "accent";
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
    sm: "px-2 py-0.5 text-[10px] gap-1",
    md: "px-2.5 py-1 text-xs gap-1.5",
  };

  const variantStyles = {
    gold: "bg-[#16091F] text-[#D4A72C] border border-[#D4A72C]/30",
    accent: "bg-[#16091F] text-[#D4A72C] border border-[#D4A72C]/30",
    upcoming: "bg-[#B77A12]/15 text-[#F4D76A] border border-[#B77A12]/30",
    purple: "bg-[#4B0A78]/20 text-[#D8A7FF] border border-[#4B0A78]/40",
    neutral: "bg-[#FAF8F2]/5 text-[#B9B0BE] border border-[#FAF8F2]/10",
    active: "bg-[#52C878]/10 text-[#52C878] border border-[#52C878]/30",
    outline: "bg-transparent text-[#FAF8F2] border border-[#FAF8F2]/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center font-medium font-mono uppercase tracking-wider rounded-full select-none",
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
            variant === "active" ? "bg-[#52C878] animate-pulse" : "bg-[#D4A72C]"
          )}
        />
      )}
      <span>{children}</span>
    </span>
  );
};
