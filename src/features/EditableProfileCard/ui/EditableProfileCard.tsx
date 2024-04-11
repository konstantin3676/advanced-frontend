import { useSelector } from 'react-redux';
import { ProfileCard } from 'entities/Profile';
import { Card } from '@chakra-ui/react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getProfileForm } from 'features/EditableProfileCard/model/selectors/getProfileForm/getProfileForm';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

import { profileActions } from '../model/slice/profileSlice';
import { getProfileReadonly } from '../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileIsLoading } from '../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../model/selectors/getProfileError/getProfileError';
import { EditableProfileCardHeader } from './EditableProfileCardHeader/EditableProfileCardHeader';

export const EditableProfileCard = () => {
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);

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

  return (
    <Card minW='lg' minH='xs' variant='outline'>
      <EditableProfileCardHeader />
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
