import './styles/index.scss';

import { Box, Flex } from '@chakra-ui/react';
import { AppRouter } from 'app/providers/AppRouter';
import { useAppDispatch } from 'app/providers/StoreProvider/config/hooks';
import { userActions } from 'entities/User';
import { useEffect } from 'react';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

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
