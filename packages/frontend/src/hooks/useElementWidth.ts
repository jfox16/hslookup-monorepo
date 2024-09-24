import { useEffect, useState } from "react";

export const useElementWidth = (ref: React.RefObject<HTMLDivElement>) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const currentRef = ref.current;

    const updateWidth = () => {
      if (currentRef) {
        setWidth(currentRef.getBoundingClientRect().width);
      }
    };

    const resizeObserver = new ResizeObserver(updateWidth);

    if (currentRef) {
      resizeObserver.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        resizeObserver.unobserve(currentRef);
      }
    }
  }, [ref]);

  return width;
}
