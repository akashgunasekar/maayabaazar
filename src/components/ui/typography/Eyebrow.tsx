import React from "react";
import { cn } from "@/lib/utils";

export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "gold" | "royal" | "purple" | "muted" | "pill";
  children: React.ReactNode;
}

export const Eyebrow: React.FC<EyebrowProps> = ({
  variant = "gold",
  className,
  children,
  ...props
}) => {
  const variantStyles = {
    gold: "text-[#C99A32]",
    royal: "text-[#F2D477]",
    purple: "text-[#F2D477]", // mapped away from purple to gold highlight
    muted: "text-[#C9C4B8]",
    pill: "inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#06152F] border border-[#C99A32]/30 text-[#C99A32] shadow-[0_0_12px_rgba(201,154,50,0.15)]",
  };

  return (
    <span
      className={cn(
        "text-[10px] sm:text-xs uppercase font-mono font-bold tracking-[0.22em] select-none",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
