import './styles/index.scss';

import { Box, Flex } from '@chakra-ui/react';
import { AppRouter } from 'app/providers/AppRouter';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

export const App = () => {
  return (
    <Box minH='100vh'>
      <Navbar />
      <Flex>
        <Sidebar />
        <AppRouter />
      </Flex>
    </Box>
  );
};
