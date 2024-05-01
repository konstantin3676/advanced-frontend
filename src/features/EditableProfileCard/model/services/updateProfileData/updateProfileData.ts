import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { Profile, ValidateProfileError } from '../../types/profile';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<
  Profile,
  undefined,
  ThunkConfig<ValidateProfileError[]>
>(
  'profile/updateProfileData',
  async (_, { rejectWithValue, getState, extra }) => {
    const formData = getProfileForm(getState());

    const errors = validateProfileData(formData);

    if (errors.length > 0) {
      return rejectWithValue(errors);
    }

    try {
      const { data } = await extra.api.put<Profile>(
        `/profile/${formData?.id}`,
        formData
      );

      if (!data) {
        throw new Error();
      }

      return data;
    } catch (e) {
      console.log(e);

      return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
  }
);
