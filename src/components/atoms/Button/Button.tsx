import type {
  FC,
  ButtonHTMLAttributes,
  ReactNode,
  ReactElement,
  MouseEvent,
} from "react";
import { isValidElement, cloneElement } from "react";
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
  asChild,
  ...props
}) => {
  const isDisabled = disabled || loading;

  const renderContent = (label: ReactNode) => (
    <>
      {loading && (
        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      )}
      {!loading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {label}
      {!loading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </>
  );

  // Modo polimórfico: si asChild es true y children es un elemento válido,
  // clonamos el hijo para heredar estilos y comportamiento.
  if (asChild && isValidElement(children)) {
    type ChildKnownProps = {
      className?: string;
      onClick?: (e: MouseEvent) => void;
      tabIndex?: number;
      [key: string]: unknown;
    };

    const child = children as ReactElement<unknown>;
    const childExistingClass = (child.props as { className?: string })
      ?.className;
    const baseClassName = cn(
      buttonVariants({ variant, size, className }),
      childExistingClass,
    );
    const childProps: ChildKnownProps = {
      className: baseClassName,
    };

    // Manejo de disabled para elementos no button (e.g., <a>, <Link>)
    if (isDisabled) {
      (childProps as Record<string, unknown>)["aria-disabled"] = true;
      childProps.tabIndex = -1;
      childProps.className = cn(
        childProps.className,
        "pointer-events-none opacity-60",
      );
      // Opcional: prevenir navegación si es anchor
      if (child.type === "a") {
        childProps.onClick = (e: MouseEvent) => e.preventDefault();
      }
    }

    const childLabel = (child.props as { children?: ReactNode })?.children;
    return cloneElement(child, childProps, renderContent(childLabel));
  }

  // Fallback: renderizar como botón nativo
  return (
    <button
      type="button"
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={isDisabled}
      {...props}
    >
      {renderContent(children)}
    </button>
  );
};

export { Button };
export type { ButtonProps };
