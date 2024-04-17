import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  AppRoutesProps,
  routeConfig,
} from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from 'app/providers/AppRouter/ui/RequireAuth';

export const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(
          ({ path, element, authOnly }: AppRoutesProps) => {
            return (
              <Route
                key={path}
                path={path}
                element={
                  authOnly ? <RequireAuth>{element}</RequireAuth> : element
                }
              />
            );
          }
        )}
      </Routes>
    </Suspense>
  );
};
