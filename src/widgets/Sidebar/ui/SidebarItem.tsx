import { Fade, Icon as ChakraIcon, Link as ChakraLink } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

import { SidebarItemType } from '../model/items';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { path, text, icon: Icon } = item;
  const { t } = useTranslation();

  return (
    <ChakraLink as={ReactRouterLink} to={path}>
      <ChakraIcon as={Icon} boxSize={6} />
      <Fade in={!collapsed} unmountOnExit>
        {t(text)}
      </Fade>
    </ChakraLink>
  );
});
