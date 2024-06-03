import { Reducer } from '@reduxjs/toolkit';
import {
  ReduxStoreWithManager,
  StateSchema,
  StateSchemaKey,
} from '@/app/providers/StoreProvider';
import { useEffect } from 'react';
import { useStore } from 'react-redux';

import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch';

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

export type ReducerListEntry = [StateSchemaKey, Reducer];

interface Props {
  reducers: ReducerList;
  children: React.ReactNode;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader = ({
  reducers,
  children,
  removeAfterUnmount = true,
}: Props) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap();

    (Object.entries(reducers) as ReducerListEntry[]).forEach(
      ([name, reducer]) => {
        const mounted = !!mountedReducers[name];

        if (!mounted) {
          store.reducerManager.add(name, reducer);
          dispatch({ type: `@INIT ${name} reducer` });
        }
      }
    );

    return () => {
      if (removeAfterUnmount) {
        (Object.entries(reducers) as ReducerListEntry[]).forEach(([name]) => {
          store.reducerManager.remove(name);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
  }, [dispatch, reducers, removeAfterUnmount, store.reducerManager]);

  return <>{children}</>;
};
