import React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: "narrow" | "default" | "wide" | "editorial";
  as?: React.ElementType;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  width = "wide",
  as: Component = "div",
  className,
  ...props
}) => {
  const widthStyles = {
    narrow: "max-w-4xl",
    default: "max-w-5xl",
    wide: "max-w-7xl",
    editorial: "max-w-[1440px]",
  };

  return (
    <Component
      className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", widthStyles[width], className)}
      {...props}
    >
      {children}
    </Component>
  );
};
