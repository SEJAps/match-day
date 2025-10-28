import type { FC } from "react";

type RowsContentProps = {
  children: React.ReactNode;
  bgColor?: string;
  className?: string;
  props?: React.HTMLAttributes<HTMLElement>;
};

export const RowsContent: FC<RowsContentProps> = ({
  children,

  ...props
}) => {
  const { className, bgColor } = props;
  return (
    <article
      className={`container mx-auto flex flex-col ${bgColor || "bg-transparent"} ${className}`}
    >
      {children}
    </article>
  );
};
