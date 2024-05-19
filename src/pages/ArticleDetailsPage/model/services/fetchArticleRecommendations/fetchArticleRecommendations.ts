import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';

export const fetchArticleRecommendations = createAsyncThunk<
  Article[],
  undefined,
  ThunkConfig<string>
>(
  'articleDetailsPage/fetchArticleRecommendations',
  async (_, { rejectWithValue, extra }) => {
    try {
      const { data } = await extra.api.get<Article[]>('/articles', {
        params: {
          _limit: 4,
        },
      });

      if (!data) {
        throw new Error();
      }

      return data;
    } catch (e) {
      return rejectWithValue('error');
    }
  }
);
