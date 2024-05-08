import { Select as ChakraSelect, SelectProps } from '@chakra-ui/react';
import { useMemo } from 'react';

export interface SelectOption<T> {
  value: T;
  content: string;
}

interface Props<T extends string> extends Omit<SelectProps, 'onChange'> {
  options: Array<SelectOption<T>>;
  readonly?: boolean;
  onChange?: (value: T) => void;
}

export const Select = <T extends string>({
  options,
  readonly,
  onChange,
  ...otherProps
}: Props<T>) => {
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
    onChange?.(e.target.value as T);
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
