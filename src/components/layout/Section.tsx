import React from "react";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  background?: "midnight" | "deepPurple" | "royalGlow" | "void" | "transparent";
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
  containerSize?: "default" | "narrow" | "wide" | "full";
  borderTop?: boolean;
  borderBottom?: boolean;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  background = "midnight",
  spacing = "lg",
  containerSize = "default",
  borderTop = false,
  borderBottom = false,
  className,
  children,
  ...props
}) => {
  const bgStyles = {
    midnight: "bg-[#08050D]",
    deepPurple: "bg-[#16091F]",
    royalGlow: "bg-[#08050D] atmosphere-purple",
    void: "bg-[#08050D]",
    transparent: "bg-transparent",
  };

  const spacingStyles = {
    none: "py-0",
    sm: "py-8 sm:py-12",
    md: "py-12 sm:py-16 lg:py-20",
    lg: "py-16 sm:py-24 lg:py-28",
    xl: "py-24 sm:py-32 lg:py-40",
  };

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden",
        bgStyles[background],
        spacingStyles[spacing],
        borderTop && "border-t border-[#FAF8F2]/[0.08]",
        borderBottom && "border-b border-[#FAF8F2]/[0.08]",
        className
      )}
      {...props}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
};
