import * as React from "react";

import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg" | "icon";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-primary)] text-white shadow-[0_2px_8px_rgba(74,78,99,0.12)] hover:bg-[var(--color-primary-dark)] hover:shadow-[0_4px_16px_rgba(74,78,99,0.16)] active:shadow-[0_1px_4px_rgba(74,78,99,0.1)] transition-all duration-200",
  secondary:
    "bg-[var(--color-accent-warm)] text-white shadow-[0_2px_8px_rgba(155,107,94,0.12)] hover:bg-[color-mix(in_oklab,var(--color-accent-warm),black_6%)] hover:shadow-[0_4px_16px_rgba(155,107,94,0.16)] active:shadow-[0_1px_4px_rgba(155,107,94,0.1)]",
  outline:
    "border border-[color-mix(in_oklab,var(--color-primary),white_42%)] bg-transparent text-[var(--color-primary)] hover:bg-[color-mix(in_oklab,var(--color-primary),white_97%)] hover:border-[var(--color-primary-light)] active:bg-[color-mix(in_oklab,var(--color-primary),white_94%)]",
  ghost: "text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-soft)] active:bg-[color-mix(in_oklab,var(--color-soft),black_5%)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3.5 text-xs",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-sm",
  icon: "h-10 w-10",
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={buttonStyles({ variant, size, className })}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
