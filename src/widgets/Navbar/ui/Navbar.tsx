import { Button, Flex, Spacer, useColorModeValue } from '@chakra-ui/react';
import { LoginModal } from 'features/AuthByUsername';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
  const bg = useColorModeValue('teal.100', 'teal.800');
  const { t } = useTranslation();

  const [isAuthModal, setAuthModal] = useState(false);

  const onCloseModal = () => {
    setAuthModal(false);
  };

  const onShowModal = () => {
    setAuthModal(true);
  };

  return (
    <>
      <Flex as='header' align='center' px={5} h='var(--navbar-height)' bg={bg}>
        <Spacer />
        <Button variant='ghost' onClick={onShowModal}>
          {t('login')}
        </Button>
      </Flex>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </>
  );
};
