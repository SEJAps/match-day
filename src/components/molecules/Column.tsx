import type { FC } from "react";

type ColumnProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  order?: string;
  bgColor?: string;
  props?: React.HTMLAttributes<HTMLElement>;
};

export const Column: FC<ColumnProps> = ({
  children,

  ...props
}) => {
  const { order, bgColor, className, style } = props;
  return (
    <section
      style={{ ...style }}
      className={`flex flex-col ${order?.length ? "order-" + order : ""} ${bgColor || "bg-transparent"} ${className}`}
    >
      {children}
    </section>
  );
};
