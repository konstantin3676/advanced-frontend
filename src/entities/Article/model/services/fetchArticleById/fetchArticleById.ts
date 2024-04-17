import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

import { Article } from '../../types/article';

export const fetchArticleById = createAsyncThunk<
  Article,
  string,
  ThunkConfig<string>
>(
  'articleDetails/fetchArticleById',
  async (articleId, { rejectWithValue, extra }) => {
    try {
      const { data } = await extra.api.get<Article>(`/articles/${articleId}`);

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
