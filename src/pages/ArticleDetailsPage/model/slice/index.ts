import { combineReducers } from '@reduxjs/toolkit';

import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';
import { articleDetailsRecommendationsReducer } from './articleDetailsRecommendationsSlice';

export const articleDetailsPageReducer = combineReducers({
  comments: articleDetailsCommentsReducer,
  recommendations: articleDetailsRecommendationsReducer,
});
