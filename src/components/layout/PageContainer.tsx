import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface PageContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function PageContainer({ children, className, ...props }: PageContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-[1280px] px-5 md:px-8", className)} {...props}>
      {children}
    </div>
  );
}
