import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "text" | "outline-gold";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  icon,
  iconPosition = "right",
  className,
  children,
  ...props
}) => {
  const baseStyles =
    "group inline-flex items-center justify-center font-bold tracking-wide uppercase transition-all duration-300 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A32] focus-visible:ring-offset-2 focus-visible:ring-offset-[#020817] disabled:opacity-50 disabled:pointer-events-none rounded-lg relative overflow-hidden active:scale-[0.98]";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-2.5 text-xs sm:text-sm gap-2",
    lg: "px-8 py-3.5 text-sm sm:text-base gap-2.5",
  };

  const variantStyles = {
    primary:
      "btn-shimmer bg-gradient-to-r from-[#C99A32] via-[#F2D477] to-[#C99A32] text-[#020817] hover:brightness-105 shadow-[0_2px_18px_rgba(201,154,50,0.35)] hover:shadow-[0_4px_28px_rgba(242,212,119,0.5)] border border-[#F2D477]/60",
    secondary:
      "btn-shimmer bg-[#06152F]/80 backdrop-blur-sm text-[#FFF8E8] hover:text-[#FFF8E8] border border-[#C99A32]/40 hover:border-[#F2D477] hover:bg-[#0B2145] hover:shadow-[0_0_20px_rgba(201,154,50,0.25)] shadow-sm",
    outline:
      "btn-shimmer bg-transparent text-[#FFF8E8] hover:text-[#F2D477] border border-[#C99A32]/40 hover:border-[#F2D477] hover:bg-[#0B2145]/30 hover:shadow-[0_0_15px_rgba(201,154,50,0.2)]",
    "outline-gold":
      "btn-shimmer bg-transparent text-[#C99A32] hover:text-[#F2D477] border border-[#C99A32]/50 hover:border-[#F2D477] hover:bg-[#0B2145]/30 hover:shadow-[0_0_15px_rgba(201,154,50,0.2)]",
    text:
      "bg-transparent text-[#C99A32] hover:text-[#F2D477] p-0 hover:translate-x-0.5 shadow-none rounded-none active:scale-100 font-semibold tracking-wider",
  };

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="shrink-0 transition-transform duration-300 ease-out group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span className="relative z-10">{children}</span>
      {icon && iconPosition === "right" && (
        <span className="shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1 relative z-10">
          {icon}
        </span>
      )}
      {!icon && variant === "text" && (
        <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1" />
      )}
    </>
  );

  const combinedClass = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    variant === "text" && "inline-flex items-center gap-1.5",
    className
  );

  if (href) {
    return (
      <Link href={href} className={combinedClass}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {content}
    </button>
  );
};

// Aliases for intuitive component usage
export const PrimaryButton: React.FC<ButtonProps> = (props) => (
  <Button variant="primary" {...props} />
);

export const SecondaryButton: React.FC<ButtonProps> = (props) => (
  <Button variant="secondary" {...props} />
);

export const TextButton: React.FC<ButtonProps> = (props) => (
  <Button variant="text" {...props} />
);
