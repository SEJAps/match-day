import type { FC, ImgHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";

const imageVariants = cva("block", {
  variants: {
    fit: {
      cover: "object-cover",
      contain: "object-contain",
      none: "object-none",
      scale: "object-scale-down",
    },
    rounded: {
      none: "",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    },
    shadow: {
      none: "",
      sm: "shadow-sm",
      md: "shadow",
      lg: "shadow-lg",
    },
  },
  defaultVariants: {
    fit: "cover",
    rounded: "none",
    shadow: "none",
  },
});

interface ImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, "loading" | "srcSet">,
    VariantProps<typeof imageVariants> {
  loading?: "eager" | "lazy";
}

const Image: FC<ImageProps> = ({
  className,
  fit,
  rounded,
  shadow,
  loading = "lazy",
  ...props
}) => {
  return (
    <img
      loading={loading}
      className={cn(imageVariants({ fit, rounded, shadow }), className)}
      {...props}
    />
  );
};

export default Image;
export type { ImageProps };
