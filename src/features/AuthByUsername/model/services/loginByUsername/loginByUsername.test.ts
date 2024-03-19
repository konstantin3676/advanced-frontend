import { loginByUsername } from './loginByUsername';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/tests/TestAsyncThunk/TestAsyncThunk';

describe('loginByUsername', () => {
  test('success login', async () => {
    const userValue = {
      username: '123',
      id: '1',
    };

    const thunk = new TestAsyncThunk(loginByUsername);

    thunk.api.post.mockResolvedValue({ data: userValue });

    const result = await thunk.callThunk({
      username: '123',
      password: '123',
    });

    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userValue)
    );
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userValue);
  });

  test('error login', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);

    thunk.api.post.mockResolvedValue({ status: 403 });

    const result = await thunk.callThunk({
      username: '123',
      password: '123',
    });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
  });
});
