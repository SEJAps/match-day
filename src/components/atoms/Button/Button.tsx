import type { FC, ButtonHTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/cn";
import { buttonVariants } from "./button.variants";

/**
 * Button Component - Atomic Design Level: Atom
 *
 * Componente de botón reutilizable que sigue los principios de Atomic Design.
 * Incluye múltiples variantes, tamaños, estados de carga e iconos.
 */

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const Button: FC<ButtonProps> = ({
  className,
  variant,
  size,
  children,
  disabled,
  loading = false,
  leftIcon,
  rightIcon,
  ...props
}) => {
  const isDisabled = disabled || loading;

  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={isDisabled}
      {...props}
    >
      {loading && (
        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      )}
      {!loading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {!loading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export { Button };
export type { ButtonProps };
