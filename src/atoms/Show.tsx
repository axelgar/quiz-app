import { ReactNode } from "react";

type Props = {
  when: unknown;
  children: ReactNode;
};

export const Show = (props: Props) => {
  const { when, children } = props;

  if (when) {
    return children;
  }

  return <></>;
};
