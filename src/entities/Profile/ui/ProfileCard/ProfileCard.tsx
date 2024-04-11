import {
  CardBody,
  Flex,
  FormControl,
  Heading,
  Image,
  Input,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Country, CountrySelect } from 'entities/Country';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Profile } from 'features/EditableProfileCard';
import { useTranslation } from 'react-i18next';

interface Props {
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency?: Currency) => void;
  onChangeCountry?: (currency?: Country) => void;
}

export const ProfileCard = ({
  data,
  isLoading,
  error,
  readonly,
  onChangeFirstname,
  onChangeLastname,
  onChangeAge,
  onChangeCity,
  onChangeUsername,
  onChangeAvatar,
  onChangeCurrency,
  onChangeCountry,
}: Props) => {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <Flex align='center' justify='center' grow={1}>
        <Spinner size='lg' />
      </Flex>
    );
  }

  if (error) {
    return (
      <Flex direction='column' align='center' justify='center' grow={1} gap={2}>
        <Heading size='md'>{t('profile-error')}</Heading>
        <Text>{t('please-refresh-page')}</Text>
      </Flex>
    );
  }

  return (
    <CardBody>
      <VStack spacing={3} maxW='2xs'>
        {data?.avatar && (
          <Flex justify='center'>
            <Image
              borderRadius='full'
              boxSize={28}
              src={data.avatar}
              alt={t('avatar')}
            />
          </Flex>
        )}
        <FormControl>
          <Input
            value={data?.firstname}
            onChange={(e) => onChangeFirstname?.(e.target.value)}
            placeholder={t('firstname')}
            disabled={readonly}
          />
        </FormControl>
        <FormControl>
          <Input
            value={data?.lastname}
            onChange={(e) => onChangeLastname?.(e.target.value)}
            placeholder={t('lastname')}
            disabled={readonly}
          />
        </FormControl>
        <FormControl>
          <Input
            value={data?.age}
            onChange={(e) => onChangeAge?.(e.target.value)}
            placeholder={t('age')}
            disabled={readonly}
          />
        </FormControl>
        <FormControl>
          <Input
            value={data?.city}
            onChange={(e) => onChangeCity?.(e.target.value)}
            placeholder={t('city')}
            disabled={readonly}
          />
        </FormControl>
        <FormControl>
          <Input
            value={data?.username}
            onChange={(e) => onChangeUsername?.(e.target.value)}
            placeholder={t('username')}
            disabled={readonly}
          />
        </FormControl>
        <FormControl>
          <Input
            value={data?.avatar}
            onChange={(e) => onChangeAvatar?.(e.target.value)}
            placeholder={t('avatar')}
            disabled={readonly}
          />
        </FormControl>
        <FormControl>
          <CurrencySelect
            value={data?.currency}
            onChange={onChangeCurrency}
            readonly={readonly}
          />
        </FormControl>
        <FormControl>
          <CountrySelect
            value={data?.country}
            onChange={onChangeCountry}
            readonly={readonly}
          />
        </FormControl>
      </VStack>
    </CardBody>
  );
};
