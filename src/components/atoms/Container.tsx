import type { FC } from "react";

type ContainerProps = {
  children: React.ReactNode;
  props?: React.HTMLAttributes<HTMLElement>;
  fullWidth?: boolean;
  bgColor?: string;
};

export const Container: FC<ContainerProps> = ({
  children,
  fullWidth,
  bgColor,
  ...props
}) => {
  return (
    <section
      className={`${fullWidth ? "w-full" : "container"} mx-auto ${bgColor || "bg-transparent"}`}
      {...props}
    >
      {children}
    </section>
  );
};
