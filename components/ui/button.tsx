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
        "bg-ink text-paper hover:bg-inkLight shadow-paper",
      secondary:
        "bg-paper text-ink border border-border hover:border-tiffany hover:text-tiffany",
      outline:
        "bg-transparent text-ink border border-borderDark hover:border-tiffany hover:text-tiffany",
      ghost: "bg-transparent text-ink hover:bg-paperDark"
    };

    const sizeClasses: Record<Size, string> = {
      sm: "px-3.5 py-2 text-sm",
      md: "px-5 py-2.5 text-sm",
      lg: "px-6 py-3 text-base"
    };

    const baseClasses = cn(
      "inline-flex items-center justify-center gap-2 rounded-sm font-medium transition-all duration-200 ease-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tiffany/40 focus-visible:ring-offset-2 focus-visible:ring-offset-parchment",
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
