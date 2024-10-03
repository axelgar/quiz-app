import { ReactNode } from "react";

type Props = {
  when: unknown;
  children: ReactNode;
};

export const Show = ({ when, children }: Props) => {
  if (when) return children;
  return <></>;
};
