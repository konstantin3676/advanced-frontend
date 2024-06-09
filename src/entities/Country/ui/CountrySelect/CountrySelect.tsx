import { Select } from '@/shared/ui/Select';
import { useTranslation } from 'react-i18next';

import { Country } from '../../model/types/country';

const options = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Ukraine, content: Country.Ukraine },
];

interface Props {
  value?: Country;
  readonly?: boolean;
  onChange?: (value?: Country) => void;
}

export const CountrySelect = ({ value, readonly, onChange }: Props) => {
  const { t } = useTranslation();

  const onChangeHandler = (value: string) => {
    onChange?.(value as Country);
  };

  return (
    <Select
      options={options}
      readonly={readonly}
      placeholder={t('country')}
      value={value}
      onChange={onChangeHandler}
    />
  );
};
