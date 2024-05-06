import { useTranslation } from 'react-i18next';
import { Center } from '@chakra-ui/react';
import { Page } from 'widgets/Page/Page';

export const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <Center h='100%'>{t('page-not-found')}</Center>
    </Page>
  );
};
