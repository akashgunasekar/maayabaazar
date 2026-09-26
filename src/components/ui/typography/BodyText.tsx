import React from "react";
import { cn } from "@/lib/utils";

export interface BodyTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: "sm" | "base" | "lg" | "lead";
  variant?: "primary" | "secondary" | "gold" | "muted";
  children: React.ReactNode;
}

export const BodyText: React.FC<BodyTextProps> = ({
  size = "base",
  variant = "secondary",
  className,
  children,
  ...props
}) => {
  const sizeStyles = {
    sm: "text-xs sm:text-sm leading-relaxed",
    base: "text-sm sm:text-base leading-relaxed",
    lg: "text-base sm:text-lg leading-relaxed",
    lead: "text-lg sm:text-xl md:text-2xl leading-relaxed font-normal",
  };

  const variantStyles = {
    primary: "text-[#FFF8E8]",
    secondary: "text-[#C9C4B8]",
    gold: "text-[#C99A32]",
    muted: "text-[#C9C4B8]/60",
  };

  return (
    <p
      className={cn(
        "font-[var(--font-body)]",
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};
