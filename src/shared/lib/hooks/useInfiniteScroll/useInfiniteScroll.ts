import { MutableRefObject, useEffect } from 'react';

interface Props {
  triggerRef: MutableRefObject<HTMLElement | null>;
  wrapperRef: MutableRefObject<HTMLElement | null>;
  callback?: () => void;
}

export const useInfiniteScroll = ({
  callback,
  triggerRef,
  wrapperRef,
}: Props) => {
  useEffect(() => {
    const triggerElement = triggerRef.current;
    const wrapperElement = wrapperRef.current;
    let observer: IntersectionObserver;

    if (triggerElement && wrapperElement && callback) {
      const options = {
        root: wrapperElement,
        rootMargin: '0px',
        threshold: 1.0,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      observer.observe(triggerElement);
    }

    return () => {
      if (observer && triggerElement) {
        observer.unobserve(triggerElement);
      }
    };
  }, [callback, triggerRef, wrapperRef]);
};
