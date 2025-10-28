import type { FC } from "react";

type RowProps = {
  children: React.ReactNode;
  bgColor?: string;
  className?: string;
  style?: React.CSSProperties;
  order?: string;
  props?: React.HTMLAttributes<HTMLElement>;
};

export const Row: FC<RowProps> = ({
  children,

  ...props
}) => {
  const { bgColor, order, className, style } = props;
  return (
    <section
      className={`flex flex-col flex-grow ${order?.length ? "order-" + order : ""} ${bgColor || "bg-transparent"} ${className}`}
      style={style}
    >
      {children}
    </section>
  );
};
