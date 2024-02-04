/* eslint-disable i18next/no-literal-string */
import { Button, Flex, Spacer, useColorModeValue } from '@chakra-ui/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalDialog } from 'shared/ui/ModalDialog/ModalDialog';

export const Navbar = () => {
  const bg = useColorModeValue('teal.100', 'teal.800');
  const { t } = useTranslation();

  const [isAuthModal, setAuthModal] = useState(false);

  const onToggleModal = () => {
    setAuthModal((prev) => !prev);
  };

  return (
    <>
      <Flex as='header' align='center' px={5} h='var(--navbar-height)' bg={bg}>
        <Spacer />
        <Button variant='ghost' onClick={onToggleModal}>
          {t('login')}
        </Button>
      </Flex>
      <ModalDialog
        isOpen={isAuthModal}
        title={t('auth')}
        onClose={onToggleModal}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        asperiores quibusdam nemo consequatur impedit facilis mollitia
        architecto. Molestias tempore nihil quia consequuntur nisi doloremque
        eligendi fugiat. Porro omnis maiores explicabo!
      </ModalDialog>
    </>
  );
};
