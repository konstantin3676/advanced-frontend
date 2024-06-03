import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';

import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageNum,
} from '../../selectors/articlesPageSelectors';

export const fetchNextArticlesPage = createAsyncThunk<
  void,
  undefined,
  ThunkConfig<string>
>('articlesPage/fetchNextArticlesPage', async (_, { dispatch, getState }) => {
  const page = getArticlesPageNum(getState());
  const isLoading = getArticlesPageIsLoading(getState());
  const hasMore = getArticlesPageHasMore(getState());

  if (hasMore && !isLoading) {
    dispatch(articlesPageActions.setPage(page + 1));
    dispatch(fetchArticlesList({}));
  }
});
