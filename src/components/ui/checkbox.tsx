import * as React from "react";

import { cn } from "@/lib/utils";

export const Checkbox = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    type="checkbox"
    className={cn(
      "mt-1 h-4 w-4 rounded border border-[var(--color-border-strong)] bg-white text-[var(--color-brand)] accent-[var(--color-brand)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]",
      className,
    )}
    {...props}
  />
));
Checkbox.displayName = "Checkbox";
