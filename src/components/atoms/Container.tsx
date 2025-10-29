import type { FC } from "react";

type ContainerProps = {
  children: React.ReactNode;
  props?: React.HTMLAttributes<HTMLElement>;
  className?: string;
  fullWidth?: boolean;
  bgColor?: string;
};

export const Container: FC<ContainerProps> = ({ ...props }) => {
  const { children, fullWidth, bgColor, className } = props;
  return (
    <section
      className={`${fullWidth ? "w-full" : "container"} mx-auto ${bgColor || "bg-transparent"} ${className}`}
    >
      {children}
    </section>
  );
};
