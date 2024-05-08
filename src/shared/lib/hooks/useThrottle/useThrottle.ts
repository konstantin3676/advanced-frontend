import { useCallback, useEffect, useRef } from 'react';

export const useThrottle = (
  callback: (...args: any[]) => void,
  delay: number
) => {
  const throttleRef = useRef(false);
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
      if (!throttleRef.current) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        callback(...args);
        throttleRef.current = true;

        timerIdRef.current = setTimeout(() => {
          throttleRef.current = false;
        }, delay);
      }
    },
    [callback, delay]
  );
};
