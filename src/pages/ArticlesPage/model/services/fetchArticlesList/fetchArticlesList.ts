import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';

export const fetchArticlesList = createAsyncThunk<
  Article[],
  undefined,
  ThunkConfig<string>
>('articlesPage/fetchArticlesList', async (_, { rejectWithValue, extra }) => {
  try {
    const { data } = await extra.api.get<Article[]>('/articles', {
      params: {
        _expand: 'user',
      },
    });

    if (!data) {
      throw new Error();
    }

    return data;
  } catch (e) {
    return rejectWithValue('error');
  }
});
