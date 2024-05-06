import { useCallback, useEffect, useRef } from 'react';

export const useThrottle = (
  callback: (...args: any[]) => void,
  delay: number
) => {
  const throttleRef = useRef(false);
  const timeoutIdRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
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

        timeoutIdRef.current = setTimeout(() => {
          throttleRef.current = false;
        }, delay);
      }
    },
    [callback, delay]
  );
};
