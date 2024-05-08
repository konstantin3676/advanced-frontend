import { Box } from '@chakra-ui/react';
import { StateSchema } from 'app/providers/StoreProvider';
import { getUIScrollByPath, uiActions } from 'features/UI';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';

interface Props {
  children: React.ReactNode;
  onScrollEnd?: () => void;
}

export const Page = ({ children, onScrollEnd }: Props) => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const scrollPosition = useSelector((state: StateSchema) =>
    getUIScrollByPath(state, pathname)
  );
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  const onScroll = useThrottle((e: React.UIEvent<HTMLDivElement>) => {
    dispatch(
      uiActions.setScrollPosition({
        path: pathname,
        position: e.currentTarget.scrollTop,
      })
    );
  }, 500);

  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollTop = scrollPosition;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      ref={wrapperRef}
      flexGrow={1}
      overflow='auto'
      h='calc(100vh - var(--navbar-height))'
      onScroll={onScroll}
    >
      {children}
      {onScrollEnd && <Box h={2} ref={triggerRef} />}
    </Box>
  );
};
