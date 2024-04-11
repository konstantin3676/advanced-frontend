import { Select as ChakraSelect, SelectProps } from '@chakra-ui/react';
import { useMemo } from 'react';

export interface SelectOption {
  value: string;
  content: string;
}

interface Props extends Omit<SelectProps, 'onChange'> {
  options: SelectOption[];
  readonly?: boolean;
  onChange?: (value: string) => void;
}

export const Select = ({
  options,
  readonly,
  onChange,
  ...otherProps
}: Props) => {
  const optionsList = useMemo(
    () =>
      options.map(({ value, content }) => (
        <option key={value} value={value}>
          {content}
        </option>
      )),
    [options]
  );

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <ChakraSelect
      {...otherProps}
      disabled={readonly}
      onChange={onChangeHandler}
    >
      {optionsList}
    </ChakraSelect>
  );
};
