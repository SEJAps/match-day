import type { FC, HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "circle" | "rect" | "pill";
  width?: number | string;
  height?: number | string;
  children?: ReactNode; // si se pasa children se oculta y se usa como layout size
  animate?: boolean; // permite desactivar animación para cargas muy rápidas
}

/**
 * Skeleton base component.
 * Usa un gradiente animado y soporta variantes simples.
 */
export const Skeleton: FC<SkeletonProps> = ({
  className,
  variant = "rect",
  width,
  height,
  style,
  children,
  animate = true,
  ...rest
}) => {
  const radius =
    variant === "circle" ? "9999px" : variant === "pill" ? "9999px" : "0.5rem";

  return (
    <div
      aria-busy="true"
      aria-live="polite"
      className={clsx(
        "relative overflow-hidden bg-neutral-800/60",
        animate &&
          "animate-pulse before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-neutral-600/30 before:to-transparent",
        className,
      )}
      style={{
        borderRadius: radius,
        width,
        height,
        ...style,
      }}
      {...rest}
    >
      {children && (
        <div className="invisible" aria-hidden>
          {children}
        </div>
      )}
    </div>
  );
};

interface PageSkeletonProps {
  lines?: number;
  heading?: boolean;
}

export const PageSkeleton: FC<PageSkeletonProps> = ({
  lines = 4,
  heading = true,
}) => {
  return (
    <div
      className="container mx-auto px-6 py-12 space-y-6"
      role="status"
      aria-label="Cargando contenido"
    >
      {heading && <Skeleton variant="text" className="h-10 w-72" />}
      <div className="space-y-3">
        {Array.from({ length: lines }).map((_, i) => (
          <Skeleton key={i} variant="text" className="h-4 w-full" />
        ))}
      </div>
    </div>
  );
};

export const LogoShowcaseSkeleton: FC = () => (
  <div
    className="container mx-auto px-6 py-12"
    role="status"
    aria-label="Cargando logo showcase"
  >
    <Skeleton className="h-12 w-56 mb-8" />
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="space-y-3">
          <Skeleton className="h-24 w-full" />
          <Skeleton variant="text" className="h-4 w-3/4" />
        </div>
      ))}
    </div>
  </div>
);

// DeferredContent: muestra children; si tardan en montarse más del delay muestra skeleton
import { useEffect, useRef, useState } from "react";

interface DeferredContentProps {
  delay?: number; // ms antes de mostrar skeleton (evita flash en cargas instantáneas)
  fallback?: ReactNode;
  children: ReactNode;
  fadeIn?: boolean;
}

export const DeferredContent: FC<DeferredContentProps> = ({
  delay = 160,
  fallback = <PageSkeleton lines={5} />,
  children,
  fadeIn = true,
}) => {
  const [showSkeleton, setShowSkeleton] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const mountedRef = useRef(true);

  useEffect(() => {
    const t = setTimeout(() => {
      if (mountedRef.current && !loaded) setShowSkeleton(true);
    }, delay);
    return () => {
      mountedRef.current = false;
      clearTimeout(t);
    };
  }, [delay, loaded]);

  useEffect(() => {
    setLoaded(true);
    if (showSkeleton) {
      const hide = setTimeout(() => setShowSkeleton(false), 60);
      return () => clearTimeout(hide);
    }
  }, [children, showSkeleton]);

  return (
    <>
      {showSkeleton && !loaded && fallback}
      <div className={fadeIn ? "fade-in-loaded" : undefined}>{children}</div>
    </>
  );
};

export default Skeleton;
