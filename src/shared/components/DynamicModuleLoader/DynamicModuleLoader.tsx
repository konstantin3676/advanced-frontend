import { Reducer } from '@reduxjs/toolkit';
import {
  ReduxStoreWithManager,
  StateSchemaKey,
  useAppDispatch,
} from 'app/providers/StoreProvider';
import { useEffect } from 'react';
import { useStore } from 'react-redux';

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer;
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
    (Object.entries(reducers) as ReducerListEntry[]).forEach(
      ([name, reducer]) => {
        store.reducerManager.add(name, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
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
