import { Provider } from 'react-redux';

import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface Props {
  children: React.ReactNode;
  initialState?: StateSchema;
}

export const StoreProvider = ({ children, initialState }: Props) => {
  const store = createReduxStore(initialState);

  return <Provider store={store}>{children}</Provider>;
};
