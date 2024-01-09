import { Box, Button, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export const PageError = () => {
  const { t } = useTranslation();

  const handleRefreshPage = () => {
    location.reload();
  };

  return (
    <Flex
      w='100%'
      h='100vh'
      align='center'
      justify='center'
      direction='column'
      gap={12}
    >
      <Box>{t('page-error')}</Box>
      <Button onClick={handleRefreshPage}>{t('refresh-page')}</Button>
    </Flex>
  );
};
