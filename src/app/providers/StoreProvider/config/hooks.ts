import { useDispatch } from 'react-redux';

import { createReduxStore } from './store';

export const useAppDispatch = useDispatch<
  ReturnType<typeof createReduxStore>['dispatch']
>;
