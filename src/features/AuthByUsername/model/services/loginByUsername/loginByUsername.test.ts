import axios from 'axios';
import { loginByUsername } from './loginByUsername';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/tests/TestAsyncThunk/TestAsyncThunk';

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

describe('loginByUsername', () => {
  test('success login', async () => {
    const userValue = {
      username: '123',
      id: '1',
    };

    mockedAxios.post.mockResolvedValue({ data: userValue });

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({
      username: '123',
      password: '123',
    });

    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userValue)
    );
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userValue);
  });

  test('error login', async () => {
    mockedAxios.post.mockResolvedValue({ status: 403 });

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({
      username: '123',
      password: '123',
    });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
  });
});
