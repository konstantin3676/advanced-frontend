import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<
  Profile,
  undefined,
  ThunkConfig<string>
>('profile/fetchProfileData', async (_, { rejectWithValue, extra }) => {
  try {
    const { data } = await extra.api.get<Profile>('/profile');

    if (!data) {
      throw new Error();
    }

    return data;
  } catch (e) {
    console.log(e);

    return rejectWithValue('error');
  }
});
