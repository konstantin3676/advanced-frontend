import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import axios, { AxiosStatic } from 'axios';

type ActionCreaterType<Return, Arg, RejectedValue> = (
  arg: Arg
) => AsyncThunkAction<Return, Arg, ThunkConfig<RejectedValue>>;

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>;
  getState: () => StateSchema;
  actionCreater: ActionCreaterType<Return, Arg, RejectedValue>;
  api: jest.MockedFunctionDeep<AxiosStatic>;
  navigate: jest.Mocked<any>;

  constructor(actionCreater: ActionCreaterType<Return, Arg, RejectedValue>) {
    this.dispatch = jest.fn();
    this.getState = jest.fn();
    this.actionCreater = actionCreater;
    this.api = mockedAxios;
    this.navigate = jest.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreater(arg);
    const result = await action(this.dispatch, this.getState, {
      api: this.api,
      navigate: this.navigate,
    });

    return result;
  }
}
