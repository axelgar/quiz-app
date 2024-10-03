import { useEffect, useRef } from "react";

export const useFocusOnMount = <E extends HTMLElement>() => {
  const ref = useRef<E>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [ref]);

  return ref;
};
