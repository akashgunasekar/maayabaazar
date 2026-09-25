import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface ImageWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  aspectRatio?: "16/9" | "4/3" | "21/9" | "1/1" | "4/5";
  priority?: boolean;
  caption?: string;
  sizes?: string;
  overlay?: boolean | "subtle" | "cinematic";
}

export const ImageWrapper: React.FC<ImageWrapperProps> = ({
  src,
  alt,
  aspectRatio = "16/9",
  priority = false,
  caption,
  sizes = "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw",
  overlay = "subtle",
  className,
  ...props
}) => {
  const aspectClasses = {
    "16/9": "aspect-[16/9]",
    "4/3": "aspect-[4/3]",
    "21/9": "aspect-[21/9]",
    "1/1": "aspect-square",
    "4/5": "aspect-[4/5]",
  };

  const overlayGradients = {
    subtle: "bg-gradient-to-t from-[#08050D]/80 via-transparent to-transparent",
    cinematic:
      "bg-gradient-to-t from-[#08050D] via-[#08050D]/40 to-transparent",
  };

  return (
    <div
      className={cn(
        "relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#16091F] border border-[#FAF8F2]/[0.08] hover:border-[#D4A72C]/30 shadow-[0_8px_30px_rgba(8,5,13,0.6)] hover:shadow-[0_16px_40px_rgba(75,10,120,0.25)] transition-all duration-500 group",
        aspectClasses[aspectRatio],
        className
      )}
      {...props}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) will-change-transform group-hover:scale-105"
      />

      {overlay && (
        <div
          className={cn(
            "absolute inset-0 pointer-events-none transition-opacity duration-300",
            overlay === "cinematic"
              ? overlayGradients.cinematic
              : overlayGradients.subtle
          )}
        />
      )}

      {caption && (
        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#08050D]/85 backdrop-blur-md border border-[#FAF8F2]/10 text-xs text-[#FAF8F2]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A72C]" />
            <span className="font-medium line-clamp-1">{caption}</span>
          </div>
        </div>
      )}
    </div>
  );
};
