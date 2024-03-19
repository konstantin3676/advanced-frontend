import { Flex, Icon, IconButton, useColorModeValue } from '@chakra-ui/react';
import { useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';

import { sidebarItemList } from '../model/items';
import { SidebarItem } from './SidebarItem';

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);

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
        {sidebarItemList.map((item) => (
          <SidebarItem key={item.path} item={item} collapsed={collapsed} />
        ))}
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
