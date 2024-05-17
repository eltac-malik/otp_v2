import { RefObject, SyntheticEvent, useEffect } from "react";

export const useOutsideClick = <T extends HTMLElement>(
  ref: RefObject<T>,
  handler: Function
) => {
  useEffect(() => {
    const listener = (event: SyntheticEvent) => {
      if (!ref.current || ref.current.contains(event.target as HTMLElement)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener as any);
    document.addEventListener("touchstart", listener as any);
    return () => {
      document.removeEventListener("mousedown", listener as any);
      document.removeEventListener("touchstart", listener as any);
    };
  }, [ref, handler]);
};
