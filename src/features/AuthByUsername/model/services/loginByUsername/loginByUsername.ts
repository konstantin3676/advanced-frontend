import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import axios from 'axios';
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
>('login/loginByUsername', async (authData, thunkApi) => {
  try {
    const { data } = await axios.post<User>(
      'http://localhost:8000/login',
      authData
    );

    if (!data) {
      throw new Error();
    }

    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));

    thunkApi.dispatch(userActions.setAuthData(data));

    return data;
  } catch (e) {
    console.log(e);

    return thunkApi.rejectWithValue('error');
  }
});
