import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticleDetailsData } from 'entities/Article';
import { Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';

import { fetchCommentsByArticleId } from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
  Comment[],
  string,
  ThunkConfig<string>
>(
  'articleDetails/addCommentForArticle',
  async (text, { dispatch, rejectWithValue, getState, extra }) => {
    const userData = getUserAuthData(getState());
    const article = getArticleDetailsData(getState());

    if (!userData || !text || !article) {
      return rejectWithValue('no data');
    }

    try {
      const { data } = await extra.api.post<Comment[]>('/comments', {
        text,
        articleId: article.id,
        userId: userData.id,
      });

      if (!data) {
        throw new Error();
      }

      dispatch(fetchCommentsByArticleId(article.id));

      return data;
    } catch (e) {
      return rejectWithValue('error');
    }
  }
);
