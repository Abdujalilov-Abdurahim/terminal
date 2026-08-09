import type { InputHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "w-full rounded-md border border-border bg-bg-alt px-4 py-2.5 font-mono text-sm text-ink placeholder:text-ink-faint outline-none focus:border-teal-dim transition-colors",
        className
      )}
      {...props}
    />
  );
}
