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
    "group inline-flex items-center justify-center font-semibold transition-all duration-300 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A72C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08050D] disabled:opacity-50 disabled:pointer-events-none rounded-xl relative overflow-hidden active:scale-[0.98]";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5",
  };

  const variantStyles = {
    primary:
      "btn-shimmer bg-[#D4A72C] text-[#08050D] hover:bg-[#F4D76A] shadow-[0_2px_16px_rgba(212,167,44,0.3)] hover:shadow-[0_4px_24px_rgba(244,215,106,0.45)] border border-[#F4D76A]/40",
    secondary:
      "btn-shimmer bg-[#16091F] text-[#FAF8F2] hover:bg-[#230F30] border border-[#FAF8F2]/10 hover:border-[#D4A72C]/40 shadow-sm",
    outline:
      "btn-shimmer bg-transparent text-[#FAF8F2] hover:text-[#FAF8F2] border border-[#D4A72C]/40 hover:border-[#D4A72C] hover:bg-[#D4A72C]/10",
    "outline-gold":
      "btn-shimmer bg-transparent text-[#D4A72C] hover:text-[#FAF8F2] border border-[#D4A72C]/50 hover:border-[#D4A72C] hover:bg-[#D4A72C]/10",
    text:
      "bg-transparent text-[#D4A72C] hover:text-[#F4D76A] p-0 hover:translate-x-0.5 shadow-none rounded-none active:scale-100",
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
