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
        "relative pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 border-b border-[#C99A32]/20 atmosphere-hero overflow-hidden bg-[#020817]",
        className
      )}
      {...props}
    >
      {/* Background ambient royal blue & gold lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(11,33,69,0.5),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[radial-gradient(circle,rgba(201,154,50,0.1),transparent_70%)] pointer-events-none" />

      {/* Subtle architectural gold line at top */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-[#C99A32]/40 to-transparent pointer-events-none" />

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

          <DisplayHeading size="2xl" className="mb-5 text-[#FFF8E8] animate-hero-text">
            {title}
          </DisplayHeading>

          {description && (
            <p
              style={{ animationDelay: "120ms" }}
              className="text-base sm:text-lg lg:text-xl text-[#C9C4B8] leading-relaxed max-w-3xl mb-8 animate-fade-in"
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
