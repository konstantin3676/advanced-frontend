import { useCallback, useEffect, useRef } from 'react';

export const useDebounce = (
  callback: (...args: any[]) => void,
  delay: number
) => {
  const timerIdRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timerIdRef.current) {
        clearTimeout(timerIdRef.current);
      }
    },
    []
  );

  return useCallback(
    (...args: any[]) => {
      if (timerIdRef.current) {
        clearTimeout(timerIdRef.current);
      }

      timerIdRef.current = setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );
};
