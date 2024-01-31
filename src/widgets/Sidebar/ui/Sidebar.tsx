import {
  Fade,
  Flex,
  Icon,
  IconButton,
  Link as ChakraLink,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  MdChevronLeft,
  MdChevronRight,
  MdInfoOutline,
  MdOutlineHome,
} from 'react-icons/md';
import { Link as ReactRouterLink } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const { t } = useTranslation();

  const bg = useColorModeValue('teal.50', 'teal.700');

  const toggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <Flex
      data-testid='sidebar'
      pos='relative'
      direction='column'
      justify='space-between'
      p={5}
      h='calc(100vh - var(--navbar-height))'
      w={collapsed ? 'var(--sidebar-width-collapsed)' : 'var(--sidebar-width)'}
      bg={bg}
      sx={{
        transition: 'width 0.3s',
      }}
    >
      <Flex
        direction='column'
        align='flex-start'
        gap={5}
        sx={{
          '& a': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1,
            whiteSpace: 'nowrap',
          },
        }}
      >
        <ChakraLink as={ReactRouterLink} to={RoutePath.main}>
          <Icon as={MdOutlineHome} boxSize={6} />
          <Fade in={!collapsed} unmountOnExit>
            {t('main')}
          </Fade>
        </ChakraLink>
        <ChakraLink as={ReactRouterLink} to={RoutePath.about}>
          <Icon as={MdInfoOutline} boxSize={6} />
          <Fade in={!collapsed} unmountOnExit>
            {t('about-us')}
          </Fade>
        </ChakraLink>
      </Flex>
      <Flex
        justify='center'
        align='center'
        gap={5}
        direction={collapsed ? 'column' : 'row'}
      >
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </Flex>
      <IconButton
        aria-label='Toggle sidebar'
        position='absolute'
        right={0}
        bottom={5}
        transform='translateX(100%)'
        borderTopLeftRadius={0}
        borderBottomLeftRadius={0}
        bg={bg}
        icon={
          collapsed ? (
            <Icon as={MdChevronRight} boxSize={6} />
          ) : (
            <Icon as={MdChevronLeft} boxSize={6} />
          )
        }
        onClick={toggle}
        sx={{
          _hover: {
            background: bg,
          },
        }}
      />
    </Flex>
  );
};
