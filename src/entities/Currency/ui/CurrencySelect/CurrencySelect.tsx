import { Select } from '@/shared/ui/Select';
import { useTranslation } from 'react-i18next';

import { Currency } from '../../model/types/currency';

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];

interface Props {
  value?: Currency;
  readonly?: boolean;
  onChange?: (value?: Currency) => void;
}

export const CurrencySelect = ({ value, readonly, onChange }: Props) => {
  const { t } = useTranslation();

  const onChangeHandler = (value: string) => {
    onChange?.(value as Currency);
  };

  return (
    <Select
      options={options}
      readonly={readonly}
      placeholder={t('currency')}
      value={value}
      onChange={onChangeHandler}
    />
  );
};
