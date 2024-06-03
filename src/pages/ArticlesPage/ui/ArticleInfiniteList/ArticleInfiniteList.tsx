import { ArticleList } from '@/entities/Article';
import { useSelector } from 'react-redux';
import { Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { getArticles } from '../../model/slice/articlesPageSlice';

export const ArticleInfiniteList = () => {
  const { t } = useTranslation();
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);
  const articles = useSelector(getArticles.selectAll);

  if (error) {
    return <Text>{t('articles-loading-error')}</Text>;
  }

  return <ArticleList isLoading={isLoading} view={view} articles={articles} />;
};
