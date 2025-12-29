import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const variantClasses: Record<Variant, string> = {
      primary:
        "bg-gradient-to-r from-primary to-accent text-white shadow-soft hover:shadow-glow",
      secondary:
        "bg-white/80 text-ink border border-border hover:border-primary/60 hover:shadow-soft",
      outline:
        "bg-transparent text-ink border border-border hover:border-primary/60",
      ghost: "bg-transparent text-ink hover:bg-white/70"
    };

    const sizeClasses: Record<Size, string> = {
      sm: "px-3 py-2 text-sm",
      md: "px-4 py-2.5 text-sm",
      lg: "px-5 py-3 text-base"
    };

    const baseClasses = cn(
      "inline-flex items-center gap-2 rounded-full font-semibold transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
      variantClasses[variant],
      sizeClasses[size],
      className
    );

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement, {
        className: cn(baseClasses, (children as React.ReactElement).props.className)
      });
    }

    return (
      <button ref={ref} className={baseClasses} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
