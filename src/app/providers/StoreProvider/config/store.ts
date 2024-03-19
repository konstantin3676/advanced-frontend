import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { $api } from 'shared/api/api';
import { NavigateOptions, To } from 'react-router-dom';

import { createReducerManager } from './reducerManager';
import { StateSchema, ThunkExtraArg } from './StateSchema';

export const createReduxStore = (
  initialState?: StateSchema,
  navigate?: (to: To, options?: NavigateOptions) => void
) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const extraArg: ThunkExtraArg = {
    api: $api,
    navigate,
  };

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
