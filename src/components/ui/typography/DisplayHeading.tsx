import React from "react";
import { cn } from "@/lib/utils";

export interface DisplayHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3";
  size?: "xl" | "2xl" | "3xl" | "4xl";
  children: React.ReactNode;
}

export const DisplayHeading: React.FC<DisplayHeadingProps> = ({
  as: Component = "h1",
  size = "3xl",
  className,
  children,
  ...props
}) => {
  const sizeClasses = {
    xl: "text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.12]",
    "2xl": "text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1]",
    "3xl": "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08]",
    "4xl": "text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.04]",
  };

  return (
    <Component
      className={cn(
        "font-[var(--font-heading)] text-[#FAF8F2] antialiased",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
