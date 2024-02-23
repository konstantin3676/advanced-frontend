import {
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

export const LoginForm = () => {
  const { t } = useTranslation();

  const usernameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    usernameInputRef.current?.focus();
  }, []);

  return (
    <Box as='form'>
      <ModalBody>
        <VStack spacing={3}>
          <FormControl>
            <FormLabel>{t('username')}</FormLabel>
            <Input ref={usernameInputRef} />
          </FormControl>
          <FormControl>
            <FormLabel>{t('password')}</FormLabel>
            <Input />
          </FormControl>
        </VStack>
      </ModalBody>
      <ModalFooter>
        <Button>{t('login')}</Button>
      </ModalFooter>
    </Box>
  );
};
