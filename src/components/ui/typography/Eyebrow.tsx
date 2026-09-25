import React from "react";
import { cn } from "@/lib/utils";

export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "gold" | "purple" | "muted" | "pill";
  children: React.ReactNode;
}

export const Eyebrow: React.FC<EyebrowProps> = ({
  variant = "gold",
  className,
  children,
  ...props
}) => {
  const variantStyles = {
    gold: "text-[#D4A72C]",
    purple: "text-[#9F5BCC]",
    muted: "text-[#B9B0BE]",
    pill: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16091F] border border-[#D4A72C]/30 text-[#D4A72C]",
  };

  return (
    <span
      className={cn(
        "text-[11px] sm:text-xs uppercase font-mono font-bold tracking-[0.2em] select-none",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
