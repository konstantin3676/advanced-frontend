import { Box, Button, Flex, useColorModeValue } from '@chakra-ui/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
    <Box
      data-testid='sidebar'
      pos='relative'
      h='calc(100vh - var(--navbar-height))'
      w={collapsed ? 'var(--sidebar-width-collapsed)' : 'var(--sidebar-width)'}
      bg={bg}
      sx={{
        transition: 'width 0.3s',
      }}
    >
      <Button onClick={toggle}>{t('toggle')}</Button>
      <Flex pos='absolute' justify='center' gap={5} bottom={5} w='100%'>
        <ThemeSwitcher />
        <LangSwitcher />
      </Flex>
    </Box>
  );
};
