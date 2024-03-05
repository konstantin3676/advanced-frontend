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
import { useAppDispatch } from 'app/providers/StoreProvider/config/hooks';

import { getLoginState } from '../../model/selectors/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

export const LoginForm = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { username, password, error, isLoading } = useSelector(getLoginState);
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

  const onLoginClick = () => {
    dispatch(loginByUsername({ username, password }));
  };

  return (
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
  );
};
