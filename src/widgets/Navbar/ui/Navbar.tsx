import {
  Button,
  Heading,
  HStack,
  Link as ChakraLink,
  Spacer,
  StackProps,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { getUserAuthData } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { NotificationButton } from 'features/NotificationButton';
import { AvatarDropdown } from 'features/AvatarDropdown';

export const Navbar = () => {
  const bg = useColorModeValue('teal.100', 'teal.800');
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);

  const [isAuthModal, setAuthModal] = useState(false);

  const onCloseModal = () => {
    setAuthModal(false);
  };

  const onShowModal = () => {
    setAuthModal(true);
  };

  const Header = (props: StackProps) => (
    <HStack
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
        <HStack align='center' justify='space-between' maxW={295} w='100%'>
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
        </HStack>
        <HStack align='center' spacing={2}>
          <NotificationButton />
          <AvatarDropdown />
        </HStack>
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
