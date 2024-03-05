import { Provider } from 'react-redux';
import { DeepPartial } from '@chakra-ui/react';

import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface Props {
  children: React.ReactNode;
  initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider = ({ children, initialState }: Props) => {
  const store = createReduxStore(initialState as StateSchema);

  return <Provider store={store}>{children}</Provider>;
};
