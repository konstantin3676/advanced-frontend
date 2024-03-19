import { Provider } from 'react-redux';
import { DeepPartial } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface Props {
  children: React.ReactNode;
  initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider = ({ children, initialState }: Props) => {
  const navigate = useNavigate();

  const store = createReduxStore(initialState as StateSchema, navigate);

  return <Provider store={store}>{children}</Provider>;
};
