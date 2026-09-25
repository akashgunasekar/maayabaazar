"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface StaggerProps extends React.HTMLAttributes<HTMLDivElement> {
  staggerDelay?: number;
  children: React.ReactNode;
}

export const Stagger: React.FC<StaggerProps> = ({
  staggerDelay = 80,
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn("grid", className)} {...props}>
      {React.Children.map(children, (child, idx) => {
        if (!React.isValidElement(child)) return child;

        const childProps = child.props as { delay?: number; style?: React.CSSProperties };
        return React.cloneElement(child, {
          ...childProps,
          delay: (childProps.delay || 0) + idx * staggerDelay,
        } as any);
      })}
    </div>
  );
};
