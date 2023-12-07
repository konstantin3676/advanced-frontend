import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { Box } from '@chakra-ui/react';

export const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routeConfig.map(({ path, element }) => (
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
