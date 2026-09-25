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
    primary: "text-[#FAF8F2]",
    secondary: "text-[#B9B0BE]",
    gold: "text-[#D4A72C]",
    muted: "text-[#807687]",
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
