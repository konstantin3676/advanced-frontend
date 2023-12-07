import { useTranslation } from 'react-i18next';
import { Center } from '@chakra-ui/react';

export const NotFoundPage = () => {
  const { t } = useTranslation();

  return <Center h='100%'>{t('page-not-found')}</Center>;
};
