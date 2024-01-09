import { Box } from '@chakra-ui/react';
import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <BugButton />
      {t('main-page')}
    </Box>
  );
};

export default MainPage;
