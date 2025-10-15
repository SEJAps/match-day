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
}) => {
  const panelRef = useRef<HTMLDivElement>(null);

  // Cerrar al hacer click fuera del panel
  const onBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!closeOnBackdropClick) return;
    if (e.target === e.currentTarget) onClose();
  };

  // Enfocar el panel al abrir (accesibilidad básica)
  useEffect(() => {
    if (open) panelRef.current?.focus();
  }, [open]);

  // Crear/obtener contenedor para portal
  const portalTarget = usePortal({
    id: portalId,
    root:
      portalRoot ?? (typeof document !== "undefined" ? document.body : null),
  });

  if (!open || !portalTarget) return null;

  return createPortal(
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-start justify-end sm:justify-center",
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
          // Panel base
          "outline-none",
          // Para menú: deslizar desde la derecha en móvil, centrado en sm+
          "w-[85%] max-w-sm h-dvh sm:h-auto sm:max-w-md",
          "bg-[var(--primary-color,#111)] text-white",
          "shadow-xl",
          // Animaciones
          "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-right-4",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
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
