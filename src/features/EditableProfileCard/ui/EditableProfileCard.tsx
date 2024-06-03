import { useSelector } from 'react-redux';
import { ProfileCard } from '@/entities/Profile';
import { Alert, AlertIcon, Card } from '@chakra-ui/react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

import { ValidateProfileError } from '../model/consts/consts';
import { getProfileForm } from '../model/selectors/getProfileForm/getProfileForm';
import { getProfileValidateErrors } from '../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { profileActions } from '../model/slice/profileSlice';
import { getProfileReadonly } from '../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileIsLoading } from '../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../model/selectors/getProfileError/getProfileError';
import { EditableProfileCardHeader } from './EditableProfileCardHeader/EditableProfileCardHeader';
import { fetchProfileData } from '../model/services/fetchProfileData/fetchProfileData';

interface Props {
  id: string;
}

export const EditableProfileCard = ({ id }: Props) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const validateErrorTranslates = {
    [ValidateProfileError.SERVER_ERROR]: t('server-error'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('country-error'),
    [ValidateProfileError.NO_DATA]: t('no-data-error'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('user-data-error'),
    [ValidateProfileError.INCORRECT_AGE]: t('age-error'),
  };

  const onChangeFirstname = (value?: string) => {
    dispatch(profileActions.updateProfile({ firstname: value }));
  };

  const onChangeLastname = (value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value }));
  };

  const onChangeAge = (value?: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value) }));
  };

  const onChangeCity = (value?: string) => {
    dispatch(profileActions.updateProfile({ city: value }));
  };

  const onChangeUsername = (value?: string) => {
    dispatch(profileActions.updateProfile({ username: value }));
  };

  const onChangeAvatar = (value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value }));
  };

  const onChangeCurrency = (currency?: Currency) => {
    dispatch(profileActions.updateProfile({ currency }));
  };

  const onChangeCountry = (country?: Country) => {
    dispatch(profileActions.updateProfile({ country }));
  };

  useEffect(() => {
    dispatch(fetchProfileData(id));
  }, [dispatch, id]);

  return (
    <Card minW='lg' minH='xs' variant='outline'>
      <EditableProfileCardHeader />
      {validateErrors?.length &&
        validateErrors.map((err) => (
          <Alert key={err} status='error'>
            <AlertIcon />
            {validateErrorTranslates[err]}
          </Alert>
        ))}
      <ProfileCard
        data={formData}
        isLoading={isLoading}
        error={error}
        readonly={readonly}
        onChangeFirstname={onChangeFirstname}
        onChangeLastname={onChangeLastname}
        onChangeAge={onChangeAge}
        onChangeCity={onChangeCity}
        onChangeUsername={onChangeUsername}
        onChangeAvatar={onChangeAvatar}
        onChangeCurrency={onChangeCurrency}
        onChangeCountry={onChangeCountry}
      />
    </Card>
  );
};
