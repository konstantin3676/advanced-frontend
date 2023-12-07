import './styles/index.scss';

import { Box, Flex } from '@chakra-ui/react';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';

export const App = () => {
  return (
    <Box minH='100vh'>
      <Navbar />
      <Flex>
        <SideBar />
        <AppRouter />
      </Flex>
    </Box>
  );
};
