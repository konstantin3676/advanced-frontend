import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { Profile } from '../../types/profile';

export const updateProfileData = createAsyncThunk<
  Profile,
  undefined,
  ThunkConfig<string>
>(
  'profile/updateProfileData',
  async (_, { rejectWithValue, getState, extra }) => {
    const formData = getProfileForm(getState());

    try {
      const { data } = await extra.api.put<Profile>('/profile', formData);

      if (!data) {
        throw new Error();
      }

      return data;
    } catch (e) {
      console.log(e);

      return rejectWithValue('error');
    }
  }
);
