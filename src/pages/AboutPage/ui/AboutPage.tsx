import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();

  return <div>{t('about-us')}</div>;
};

export default AboutPage;
