import { Flex, useColorModeValue } from '@chakra-ui/react';

export const Navbar = () => {
  const bg = useColorModeValue('teal.100', 'teal.800');

  return <Flex as='header' px={5} h='var(--navbar-height)' bg={bg}></Flex>;
};
