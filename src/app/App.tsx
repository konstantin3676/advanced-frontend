import './styles/index.scss';

import { Box, Flex } from '@chakra-ui/react';
import { AppRouter } from '@/app/providers/AppRouter';
import { getUserInited, userActions } from '@/entities/User';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

export const App = () => {
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <Box minH='100vh'>
      <Navbar />
      <Flex>
        <Sidebar />
        {inited && <AppRouter />}
      </Flex>
    </Box>
  );
};
