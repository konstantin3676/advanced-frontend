// eslint-disable-next-line advanced-frontend/layer-imports
import { UserRole } from '@/entities/User';
import { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
};
