import { Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const BugButton = () => {
  const { t } = useTranslation();

  const [error, setError] = useState(false);

  const handleThrowError = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return <Button onClick={handleThrowError}>{t('throw-error')}</Button>;
};
