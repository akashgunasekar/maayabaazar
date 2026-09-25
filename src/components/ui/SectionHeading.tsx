import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  kicker?: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  align?: "left" | "center";
  size?: "lg" | "xl" | "editorial";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  title,
  description,
  align = "left",
  size = "lg",
  className,
  ...props
}) => {
  const alignStyles = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
  };

  const titleSizes = {
    lg: "text-2xl sm:text-3xl lg:text-4xl tracking-tight font-extrabold",
    xl: "text-3xl sm:text-4xl lg:text-5xl tracking-[-0.03em] font-extrabold",
    editorial: "text-3xl sm:text-5xl lg:text-6xl tracking-[-0.035em] font-extrabold leading-[1.08]",
  };

  return (
    <div
      className={cn("flex flex-col gap-3 max-w-3xl", alignStyles[align], className)}
      {...props}
    >
      {kicker && (
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D6B36A]" />
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#D6B36A]">
            {kicker}
          </span>
        </div>
      )}
      <h2
        className={cn(
          "font-[var(--font-manrope)] text-[#F5F5F2]",
          titleSizes[size]
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="text-sm sm:text-base lg:text-lg text-[#A7A9B0] leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
};
