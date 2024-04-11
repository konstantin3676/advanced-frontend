import { Button } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

interface Props {
  short: boolean;
}

export const LangSwitcher = ({ short }: Props) => {
  const { t, i18n } = useTranslation();

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button colorScheme='teal' minW='14' onClick={toggle}>
      {t(short ? 'short-language' : 'language')}
    </Button>
  );
};
