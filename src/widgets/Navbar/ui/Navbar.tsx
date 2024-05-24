import {
  Avatar,
  Button,
  Flex,
  FlexProps,
  Heading,
  Link as ChakraLink,
  MenuButton,
  Spacer,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';

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
      justify='space-between'
      px={5}
      h='var(--navbar-height)'
      bg={bg}
      {...props}
    />
  );

  if (authData) {
    return (
      <Header>
        <Flex align='center' justify='space-between' maxW={295} w='100%'>
          <Heading as='h1' size='lg'>
            {t('app')}
          </Heading>
          <ChakraLink
            as={ReactRouterLink}
            to={RoutePath.article_create}
            fontWeight={600}
            color='teal.600'
          >
            {t('add-article')}
          </ChakraLink>
        </Flex>
        <Dropdown
          items={[
            {
              content: t('profile'),
              href: `${RoutePath.profile}${authData.id}`,
            },
            {
              content: t('logout'),
              onClick: onLogout,
            },
          ]}
        >
          <MenuButton
            as={Avatar}
            size='sm'
            src={authData.avatar}
            cursor='pointer'
          ></MenuButton>
        </Dropdown>
      </Header>
    );
  }

  return (
    <>
      <Header>
        <Spacer />
        <Button variant='ghost' colorScheme='teal' onClick={onShowModal}>
          {t('login')}
        </Button>
      </Header>
      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      )}
    </>
  );
};
