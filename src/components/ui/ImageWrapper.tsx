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
    subtle: "bg-gradient-to-t from-[#020817]/85 via-transparent to-transparent",
    cinematic:
      "bg-gradient-to-t from-[#020817] via-[#020817]/45 to-transparent",
  };

  return (
    <div
      className={cn(
        "relative w-full rounded-xl overflow-hidden bg-[#06152F] border border-[#C99A32]/20 hover:border-[#C99A32]/50 shadow-[0_8px_30px_rgba(2,8,23,0.8)] hover:shadow-[0_16px_40px_rgba(11,33,69,0.4),0_0_20px_rgba(201,154,50,0.15)] transition-all duration-500 group",
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
        className="object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-105"
      />

      {overlay && (
        <div
          className={cn(
            "absolute inset-0 pointer-events-none transition-opacity duration-300",
            typeof overlay === "string" ? overlayGradients[overlay] : overlayGradients.subtle
          )}
        />
      )}

      {caption && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#020817] via-[#020817]/80 to-transparent z-10">
          <p className="text-xs sm:text-sm text-[#C9C4B8] font-medium">{caption}</p>
        </div>
      )}
    </div>
  );
};
