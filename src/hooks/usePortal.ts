import { useEffect, useRef, useState } from "react";

interface UsePortalOptions {
  id?: string;
  className?: string;
  root?: HTMLElement | null;
}

/**
 * usePortal - Crea un contenedor en el DOM para portales de React
 * Útil para modales, tooltips y overlays que deben salir del flujo normal del layout.
 */
export function usePortal(options: UsePortalOptions = {}) {
  const {
    id = "modal-root",
    className = "z-[1000]",
    root = typeof document !== "undefined" ? document.body : null,
  } = options;
  const elRef = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!root) return; // SSR/entorno sin DOM

    let container = (
      id ? document.getElementById(id) : null
    ) as HTMLElement | null;
    let created = false;

    if (!container) {
      container = document.createElement("div");
      if (id) container.id = id;
      if (className) container.className = className;
      root.appendChild(container);
      created = true;
    }

    elRef.current = container;
    setMounted(true);

    return () => {
      // Solo eliminamos si lo creamos nosotros y sigue en el DOM
      if (created && container && container.parentNode) {
        container.parentNode.removeChild(container);
      }
      elRef.current = null;
    };
  }, [id, className, root]);

  return mounted ? elRef.current : null;
}

export default usePortal;
