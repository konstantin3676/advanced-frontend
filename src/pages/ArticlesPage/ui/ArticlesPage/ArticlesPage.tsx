import { Container, Stack } from '@chakra-ui/react';
import {
  DynamicModuleLoader,
  ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useEffect } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/widgets/Page';
import { useSearchParams } from 'react-router-dom';

import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { articlesPageReducer } from '../../model/slice/articlesPageSlice';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';

const reducers: ReducerList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  const onLoadNextPart = () => {
    dispatch(fetchNextArticlesPage());
  };

  useEffect(() => {
    dispatch(initArticlesPage(searchParams));
  }, [dispatch, searchParams]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page onScrollEnd={onLoadNextPart}>
        <Container maxW='container.md'>
          <Stack spacing={4} py={4}>
            <ArticlesPageFilters />
            <ArticleInfiniteList />
          </Stack>
        </Container>
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
