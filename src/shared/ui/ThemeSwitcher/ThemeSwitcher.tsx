import { Button, Icon, useColorMode } from '@chakra-ui/react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

export const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button colorScheme='teal' onClick={toggleColorMode}>
      {colorMode === 'light' ? (
        <Icon as={MdOutlineDarkMode} boxSize={6} />
      ) : (
        <Icon as={MdOutlineLightMode} boxSize={6} />
      )}
    </Button>
  );
};
