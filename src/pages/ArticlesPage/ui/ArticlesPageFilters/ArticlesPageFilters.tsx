import { Flex, Input, Stack } from '@chakra-ui/react';
import {
  ArticleSortField,
  ArticleSortSelector,
  ArticleType,
  ArticleTypeTabs,
  ArticleView,
  ArticleViewSelector,
} from 'entities/Article';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTranslation } from 'react-i18next';
import { SortOrder } from 'shared/types';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';

import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { articlesPageActions } from '../../model/slice/articlesPageSlice';

export const ArticlesPageFilters = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesPageView);
  const sort = useSelector(getArticlesPageSort);
  const order = useSelector(getArticlesPageOrder);
  const search = useSelector(getArticlesPageSearch);
  const type = useSelector(getArticlesPageType);

  const fetchData = () => {
    dispatch(fetchArticlesList({ replace: true }));
  };

  const debouncedFetchData = useDebounce(fetchData, 500);

  const onChangeView = (view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  };

  const onChangeSort = (sort: ArticleSortField) => {
    dispatch(articlesPageActions.setSort(sort));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  };

  const onChangeOrder = (order: SortOrder) => {
    dispatch(articlesPageActions.setOrder(order));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  };

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(articlesPageActions.setSearch(e.target.value));
    dispatch(articlesPageActions.setPage(1));
    debouncedFetchData();
  };

  const onChangeType = (type: ArticleType) => {
    dispatch(articlesPageActions.setType(type));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  };

  return (
    <Stack>
      <Flex align='center' justify='space-between'>
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeSort={onChangeSort}
          onChangeOrder={onChangeOrder}
        />
        <ArticleViewSelector currentView={view} onViewClick={onChangeView} />
      </Flex>
      <Input
        size='sm'
        placeholder={t('search')}
        value={search}
        onChange={onChangeSearch}
      />
      <ArticleTypeTabs type={type} onChangeType={onChangeType} />
    </Stack>
  );
};
