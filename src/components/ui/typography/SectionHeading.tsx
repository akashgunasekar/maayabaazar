import React from "react";
import { Eyebrow } from "./Eyebrow";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  eyebrowVariant?: "gold" | "purple" | "muted" | "pill";
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  size?: "md" | "lg" | "xl";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  eyebrowVariant = "gold",
  title,
  description,
  align = "left",
  size = "lg",
  className,
  ...props
}) => {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  const titleSizes = {
    md: "text-2xl sm:text-3xl font-bold tracking-tight",
    lg: "text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight",
    xl: "text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight",
  };

  return (
    <div
      className={cn(
        "flex flex-col max-w-3xl",
        alignmentClasses[align],
        className
      )}
      {...props}
    >
      {eyebrow && (
        <div className="mb-3">
          <Eyebrow variant={eyebrowVariant}>{eyebrow}</Eyebrow>
        </div>
      )}

      <h2
        className={cn(
          "font-[var(--font-heading)] text-[#FAF8F2] leading-[1.12]",
          titleSizes[size]
        )}
      >
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-sm sm:text-base lg:text-lg text-[#B9B0BE] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
