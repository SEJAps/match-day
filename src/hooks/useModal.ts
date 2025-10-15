import { useCallback, useEffect, useState } from "react";

/**
 * useModal - Hook para controlar un modal accesible
 * - Maneja estado de apertura, cierre por ESC y bloqueo de scroll en body
 */
export function useModal(initialOpen = false) {
  const [isOpen, setIsOpen] = useState<boolean>(initialOpen);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((v) => !v), []);

  // Cerrar con tecla ESC
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        close();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close]);

  // Bloquear scroll del body cuando el modal está abierto
  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      const prev = body.style.overflow;
      body.style.overflow = "hidden";
      return () => {
        body.style.overflow = prev;
      };
    }
  }, [isOpen]);

  return { isOpen, open, close, toggle } as const;
}

export default useModal;
