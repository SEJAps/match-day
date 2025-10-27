import type { FC } from "react";

type RowsContentProps = {
  children: React.ReactNode;
  bgColor?: string;
  props?: React.HTMLAttributes<HTMLElement>;
};

export const RowsContent: FC<RowsContentProps> = ({
  children,
  bgColor,
  ...props
}) => {
  return (
    <article
      className={`container mx-auto flex flex-col ${bgColor || "bg-transparent"}`}
      {...props}
    >
      {children}
    </article>
  );
};
