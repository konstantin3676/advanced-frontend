import {
  Button,
  Flex,
  FlexProps,
  Spacer,
  useColorModeValue,
} from '@chakra-ui/react';
import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export const Navbar = () => {
  const bg = useColorModeValue('teal.100', 'teal.800');
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  const dispatch = useAppDispatch();

  const [isAuthModal, setAuthModal] = useState(false);

  const onCloseModal = () => {
    setAuthModal(false);
  };

  const onShowModal = () => {
    setAuthModal(true);
  };

  const onLogout = () => {
    dispatch(userActions.logout());
  };

  const Header = (props: FlexProps) => (
    <Flex
      as='header'
      align='center'
      px={5}
      h='var(--navbar-height)'
      bg={bg}
      {...props}
    />
  );

  if (authData) {
    return (
      <Header>
        <Spacer />
        <Button variant='ghost' onClick={onLogout}>
          {t('logout')}
        </Button>
      </Header>
    );
  }

  return (
    <>
      <Header>
        <Spacer />
        <Button variant='ghost' onClick={onShowModal}>
          {t('login')}
        </Button>
      </Header>
      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      )}
    </>
  );
};
