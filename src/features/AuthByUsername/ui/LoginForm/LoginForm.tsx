import {
  Alert,
  AlertIcon,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  ModalFooter,
  VStack,
} from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  DynamicModuleLoader,
  ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginUsername } from '../../model/selectors/getLoginUsename';
import { getLoginPassword } from '../../model/selectors/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError';

const initialReducers: ReducerList = {
  loginForm: loginReducer,
};

export interface LoginFormProps {
  onSuccess: () => void;
}

const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);
  const usernameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    usernameInputRef.current?.focus();
  }, []);

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(loginActions.setUsername(e.target.value));
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(loginActions.setPassword(e.target.value));
  };

  const onLoginClick = async () => {
    const result = await dispatch(loginByUsername({ username, password }));

    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  };

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <Box as='form'>
        <ModalBody>
          <VStack spacing={3}>
            {error && (
              <Alert status='error'>
                <AlertIcon />
                {t('auth-error')}
              </Alert>
            )}
            <FormControl>
              <FormLabel>{t('user-name')}</FormLabel>
              <Input
                ref={usernameInputRef}
                value={username}
                onChange={onChangeUsername}
              />
            </FormControl>
            <FormControl>
              <FormLabel>{t('password')}</FormLabel>
              <Input value={password} onChange={onChangePassword} />
            </FormControl>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button isDisabled={isLoading} onClick={onLoginClick}>
            {t('login')}
          </Button>
        </ModalFooter>
      </Box>
    </DynamicModuleLoader>
  );
};

export default LoginForm;
