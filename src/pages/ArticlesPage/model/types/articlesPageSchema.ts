import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<Article, string> {
  isLoading: boolean;
  view: ArticleView;
  page: number;
  hasMore: boolean;
  limit?: number;
  error?: string;
}
