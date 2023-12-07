import { Flex, Spinner } from '@chakra-ui/react';

export const PageLoader = () => {
  return (
    <Flex
      align='center'
      justify='center'
      grow={1}
      minH='calc(100vh - var(--navbar-height))'
    >
      <Spinner size='xl' />
    </Flex>
  );
};
