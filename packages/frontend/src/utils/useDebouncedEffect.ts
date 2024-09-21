import { useCallback, useEffect } from "react"

export const useDebouncedEffect = (
  effect: () => void | Promise<void>,
  deps: any[],
  delay: number,
) => {
  /* eslint-disable react-hooks/exhaustive-deps */
  // Memoize the effect to avoid it being recreated on every render
  const memoizedEffect = useCallback(effect, deps);

  useEffect(() => {
    const handler = setTimeout(() => {
      memoizedEffect();
    }, delay);

    return () => clearTimeout(handler);
  }, [memoizedEffect, delay]); // Only runs when delay or memoizedEffect changes
}
