import type { FC } from "react";

type RowProps = {
  children: React.ReactNode;
  bgColor?: string;
  order?: string;
  props?: React.HTMLAttributes<HTMLElement>;
};

export const Row: FC<RowProps> = ({ children, bgColor, order }) => {
  return (
    <section
      className={`flex flex-col flex-grow ${order?.length ? "order-" + order : ""} ${bgColor || "bg-transparent"}`}
    >
      {children}
    </section>
  );
};
