import { Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

export const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(() => {
    return routeConfig.filter(({ authOnly }) => {
      if (authOnly) {
        return isAuth;
      }

      return true;
    });
  }, [isAuth]);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={
              <Box flexGrow={1} p={5}>
                {element}
              </Box>
            }
          />
        ))}
      </Routes>
    </Suspense>
  );
};
