import {
  Flex,
  Link as ChakraLink,
  Spacer,
  useColorModeValue,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Navbar = () => {
  const { t } = useTranslation();
  const bg = useColorModeValue('teal.100', 'teal.800');

  return (
    <Flex px={5} h='var(--navbar-height)' bg={bg}>
      <Spacer />
      <Flex align='center' gap={4}>
        <ChakraLink as={ReactRouterLink} to='/'>
          {t('main')}
        </ChakraLink>
        <ChakraLink as={ReactRouterLink} to='/about'>
          {t('about-us')}
        </ChakraLink>
      </Flex>
    </Flex>
  );
};
