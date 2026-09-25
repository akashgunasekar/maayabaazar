import React from "react";
import { Container } from "./Container";
import { Eyebrow } from "@/components/ui/typography/Eyebrow";
import { DisplayHeading } from "@/components/ui/typography/DisplayHeading";
import { cn } from "@/lib/utils";

export interface PageHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  badge?: React.ReactNode;
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: React.ReactNode;
  actions?: React.ReactNode;
  align?: "left" | "center";
}

export const PageHero: React.FC<PageHeroProps> = ({
  badge,
  eyebrow,
  title,
  description,
  breadcrumbs,
  actions,
  align = "left",
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 border-b border-[#FAF8F2]/[0.08] atmosphere-hero overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(212,167,44,0.08),transparent_70%)] pointer-events-none" />

      <Container>
        <div
          className={cn(
            "flex flex-col max-w-4xl relative z-10",
            align === "center" ? "items-center text-center mx-auto" : "items-start text-left"
          )}
        >
          {breadcrumbs && <div className="mb-6 animate-fade-in">{breadcrumbs}</div>}

          {badge && <div className="mb-4 animate-fade-in">{badge}</div>}

          {eyebrow && !badge && (
            <div className="mb-4 animate-fade-in">
              <Eyebrow variant="gold">{eyebrow}</Eyebrow>
            </div>
          )}

          <DisplayHeading size="2xl" className="mb-5 text-[#FAF8F2] animate-hero-text">
            {title}
          </DisplayHeading>

          {description && (
            <p
              style={{ animationDelay: "120ms" }}
              className="text-base sm:text-lg lg:text-xl text-[#B9B0BE] leading-relaxed max-w-3xl mb-8 animate-fade-in"
            >
              {description}
            </p>
          )}

          {actions && (
            <div
              style={{ animationDelay: "220ms" }}
              className="flex flex-wrap items-center gap-4 animate-fade-in"
            >
              {actions}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};
