import React from "react";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  background?: "midnight" | "deepNavy" | "deepPurple" | "royalGlow" | "void" | "transparent";
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
    midnight: "bg-[#020817]",
    deepNavy: "bg-[#06152F]",
    deepPurple: "bg-[#06152F]", // mapped to deep navy
    royalGlow: "bg-[#020817] atmosphere-royal",
    void: "bg-[#020817]",
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
        borderTop && "border-t border-[#C99A32]/15",
        borderBottom && "border-b border-[#C99A32]/15",
        className
      )}
      {...props}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
};
