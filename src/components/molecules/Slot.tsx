import type { FC } from "react";

const Slot: FC<{ children: React.ReactNode }> = ({ children }) => {
  return children;
};

export { Slot };
