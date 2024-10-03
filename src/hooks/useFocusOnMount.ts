import { useEffect } from "react";

export const useFocusOnMount = <E extends HTMLElement>(ref: React.MutableRefObject<E | null>) => {
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [ref]);
};
