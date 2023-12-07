import { Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();

  return <Box>{t('main-page')}</Box>;
};

export default MainPage;
