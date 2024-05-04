import { Box } from '@chakra-ui/react';
import { useRef } from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';

interface Props {
  children: React.ReactNode;
  onScrollEnd?: () => void;
}

export const Page = ({ children, onScrollEnd }: Props) => {
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  return (
    <Box
      ref={wrapperRef}
      flexGrow={1}
      overflow='auto'
      h='calc(100vh - var(--navbar-height))'
    >
      {children}
      <Box ref={triggerRef} />
    </Box>
  );
};
