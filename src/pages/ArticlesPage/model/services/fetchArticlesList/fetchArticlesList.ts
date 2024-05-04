import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesPageLimit } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';

interface Props {
  page?: number;
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  Props,
  ThunkConfig<string>
>(
  'articlesPage/fetchArticlesList',
  async ({ page = 1 }, { rejectWithValue, getState, extra }) => {
    const limit = getArticlesPageLimit(getState());

    try {
      const { data } = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
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
