import { type FC, type ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { cn } from "../../utils/cn";
import { usePortal } from "../../hooks/usePortal";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  backdropClassName?: string;
  containerClassName?: string;
  ariaLabel?: string;
  ariaLabelledby?: string;
  ariaDescribedby?: string;
  closeOnBackdropClick?: boolean;
  portalId?: string;
  portalRoot?: HTMLElement | null;
  placement?: "right" | "center";
  size?: "sm" | "md" | "lg" | "full";
}

/**
 * Modal - Atomic Design: Molecule
 * Backdrop con cierre por click fuera y rol accesible.
 */
const Modal: FC<ModalProps> = ({
  open,
  onClose,
  children,
  className,
  backdropClassName,
  containerClassName,
  ariaLabel = "Diálogo modal",
  ariaLabelledby,
  ariaDescribedby,
  closeOnBackdropClick = true,
  portalId = "modal-root",
  portalRoot,
  placement = "right",
  size = "md",
}) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  // Cerrar al hacer click fuera del panel
  const onBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!closeOnBackdropClick) return;
    if (e.target === e.currentTarget) onClose();
  };

  // Enfocar el panel al abrir y restaurar foco al cerrar
  useEffect(() => {
    if (open) {
      lastFocusedRef.current = (document.activeElement as HTMLElement) ?? null;
      panelRef.current?.focus();
    } else {
      lastFocusedRef.current?.focus?.();
    }
  }, [open]);

  // Focus trap dentro del panel
  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    if (!panel) return;

    const focusableSelectors = [
      "a[href]",
      "button:not([disabled])",
      "textarea:not([disabled])",
      "input:not([disabled])",
      "select:not([disabled])",
      '[tabindex]:not([tabindex="-1"])',
    ].join(",");

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const focusables = Array.from(
        panel.querySelectorAll<HTMLElement>(focusableSelectors)
      ).filter((el) => !el.hasAttribute("disabled") && el.tabIndex !== -1);
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey) {
        if (active === first || !panel.contains(active)) {
          last.focus();
          e.preventDefault();
        }
      } else {
        if (active === last || !panel.contains(active)) {
          first.focus();
          e.preventDefault();
        }
      }
    };

    panel.addEventListener("keydown", handleKeyDown);
    return () => panel.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  // Crear/obtener contenedor para portal
  const portalTarget = usePortal({
    id: portalId,
    root:
      portalRoot ?? (typeof document !== "undefined" ? document.body : null),
  });

  if (!open || !portalTarget) return null;

  const containerPlacement =
    placement === "center"
      ? "items-center justify-center"
      : "items-start justify-end sm:justify-center";

  const sizeClasses = (() => {
    switch (size) {
      case "sm":
        return "w-[85%] max-w-sm";
      case "lg":
        return "w-[90%] max-w-lg";
      case "full":
        return "w-screen max-w-none";
      case "md":
      default:
        return "w-[85%] max-w-md";
    }
  })();

  const panelLayout = (() => {
    if (size === "full") return "h-dvh";
    return placement === "center"
      ? "h-auto max-h-[90dvh] overflow-auto rounded-md"
      : "h-dvh sm:h-auto";
  })();

  return createPortal(
    <div
      className={cn(
        "fixed inset-0 z-[1000] modal-backdrop-animate",
        containerPlacement,
        "bg-black/50 backdrop-blur-sm",
        backdropClassName,
        containerClassName
      )}
      onMouseDown={onBackdropClick}
      aria-label={ariaLabel}
      role="dialog"
      aria-modal="true"
      aria-labelledby={ariaLabelledby}
      aria-describedby={ariaDescribedby}
    >
      <div
        ref={panelRef}
        tabIndex={-1}
        className={cn(
          "outline-none",
          sizeClasses,
          panelLayout,
          "bg-[var(--primary-color,#111)] text-white",
          "shadow-xl",
          placement === "right"
            ? "modal-panel-animate-right"
            : "modal-panel-animate-center",
          "p-6",
          className
        )}
        data-state={open ? "open" : "closed"}
      >
        {children}
      </div>
    </div>,
    portalTarget
  );
};

export default Modal;
