import type { FC } from "react";

type ColumnContentProps = {
  children: React.ReactNode;
  bgColor?: string;
  className?: string;
  props?: React.HTMLAttributes<HTMLElement>;
};

export const ColumnContent: FC<ColumnContentProps> = ({
  children,
  ...props
}) => {
  const { bgColor, className } = props;
  return (
    <article
      className={`container mx-auto flex-col flex lg:flex-row ${bgColor || "bg -transparent"} ${className} `}
    >
      {children}
    </article>
  );
};
