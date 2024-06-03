import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';

const AdimPanelPage = () => {
  const { t } = useTranslation();

  return <Page>{t('admin-panel')}</Page>;
};

export default AdimPanelPage;
