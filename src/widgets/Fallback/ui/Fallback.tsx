import { Flex, FlexProps, Spinner } from '@chakra-ui/react';

interface Props {
  height?: FlexProps['height'];
}

export const Fallback = ({ height }: Props) => {
  return (
    <Flex align='center' justify='center' height={height}>
      <Spinner size='xl' />
    </Flex>
  );
};
