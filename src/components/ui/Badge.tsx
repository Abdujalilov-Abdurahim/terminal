import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export function Badge({ children, className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "rounded-md border border-border px-2 py-1 font-mono text-[11px] text-ink-dim",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
