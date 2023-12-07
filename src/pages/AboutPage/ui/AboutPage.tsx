import { Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();

  return <Box>{t('about-us')}</Box>;
};

export default AboutPage;
