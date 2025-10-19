import { cva } from "class-variance-authority";

/**
 * Definición de variantes para el componente Button
 * Utiliza CVA (Class Variance Authority) para una gestión tipada de variantes
 */
export const buttonVariants = cva(
  // Clases base que siempre se aplican
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-slate-50 shadow hover:bg-slate-900/90",
        destructive: "bg-red-400 text-slate-50 shadow-sm hover:bg-red-400/90",
        outline:
          "border border-[#10B981]/50 -200 bg-[#10B981]/10 shadow-sm hover:bg-[#10B981]/10 hover:border-[#10B990] ctext-100 hover:text-white/80",
        secondary:
          "bg-slate-100 text-slate-900 shadow-sm hover:bg-slate-100/80",
        ghost: "hover:bg-slate-100 hover:text-slate-900",
        link: "text-slate-900 underline-offset-4 hover:underline",
        success: "bg-[#10B981] text-slate-50 shadow-sm hover:bg-green-400/90",
        warning: "bg-yellow-400 text-slate-50 shadow-sm hover:bg-yellow-400/90",
        info: "bg-blue-400 text-slate-50 shadow-sm hover:bg-blue-400/90",
        primary: "bg-blue-400 text-white shadow-sm hover:bg-blue-400/90",
        view: "bg-white/10  border border-[#02B94950] hover:border-[#02B949] hover:bg-[#02B94950]/50 hover:text-white",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        xl: "h-12 rounded-lg px-10 text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
