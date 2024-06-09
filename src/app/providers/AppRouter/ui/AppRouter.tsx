import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from '@/widgets/PageLoader';
import { AppRoutesProps } from '@/shared/types/router';

import { routeConfig } from '../config/routeConfig';
import { RequireAuth } from './RequireAuth';

export const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(
          ({ path, element, authOnly, roles }: AppRoutesProps) => {
            return (
              <Route
                key={path}
                path={path}
                element={
                  authOnly ? (
                    <RequireAuth roles={roles}>{element}</RequireAuth>
                  ) : (
                    element
                  )
                }
              />
            );
          }
        )}
      </Routes>
    </Suspense>
  );
};
