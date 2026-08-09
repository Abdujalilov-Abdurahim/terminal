import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hoverable?: boolean;
}

export function Card({ children, hoverable = true, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border-soft bg-surface p-6 transition-all",
        hoverable && "hover:border-teal-dim hover:-translate-y-0.5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
