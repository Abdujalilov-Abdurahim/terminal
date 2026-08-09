import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

type Variant = "primary" | "ghost" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary: "bg-teal text-bg font-semibold hover:bg-teal-light",
  ghost: "text-ink-dim border border-border hover:text-ink hover:border-ink-faint",
  outline: "text-teal border border-teal-dim hover:bg-teal/10 hover:border-teal"
};

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center gap-2 rounded-md px-5 py-3 font-mono text-sm transition-all",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
