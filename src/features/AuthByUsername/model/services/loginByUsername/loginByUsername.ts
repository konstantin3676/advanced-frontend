import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface Props {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  Props,
  ThunkConfig<string>
>(
  'login/loginByUsername',
  async (authData, { dispatch, rejectWithValue, extra }) => {
    try {
      const { data } = await extra.api.post<User>('/login', authData);

      if (!data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));

      dispatch(userActions.setAuthData(data));

      return data;
    } catch (e) {
      return rejectWithValue('error');
    }
  }
);
