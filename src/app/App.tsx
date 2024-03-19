import './styles/index.scss';

import { Box, Flex } from '@chakra-ui/react';
import { AppRouter } from 'app/providers/AppRouter';
import { userActions } from 'entities/User';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
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
