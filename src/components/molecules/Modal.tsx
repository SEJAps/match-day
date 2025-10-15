import { type FC, type ReactNode, useEffect, useRef } from "react";
import { cn } from "../../utils/cn";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  backdropClassName?: string;
  ariaLabel?: string;
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
  ariaLabel = "Diálogo modal",
}) => {
  const panelRef = useRef<HTMLDivElement>(null);

  // Cerrar al hacer click fuera del panel
  const onBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  // Enfocar el panel al abrir (accesibilidad básica)
  useEffect(() => {
    if (open) panelRef.current?.focus();
  }, [open]);

  if (!open) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-start justify-end sm:justify-center",
        "bg-black/50 backdrop-blur-sm",
        backdropClassName
      )}
      onMouseDown={onBackdropClick}
      aria-label={ariaLabel}
      role="dialog"
      aria-modal="true"
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
    </div>
  );
};

export default Modal;
