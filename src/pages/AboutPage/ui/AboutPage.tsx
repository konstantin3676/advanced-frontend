import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

const AboutPage = () => {
  const { t } = useTranslation();

  return <Page>{t('about-us')}</Page>;
};

export default AboutPage;
