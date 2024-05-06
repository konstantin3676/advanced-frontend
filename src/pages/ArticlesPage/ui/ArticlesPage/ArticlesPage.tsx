import { Container, Stack } from '@chakra-ui/react';
import {
  ArticleList,
  ArticleView,
  ArticleViewSelector,
} from 'entities/Article';
import {
  DynamicModuleLoader,
  ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Page } from 'widgets/Page/Page';

import {
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles,
} from '../../model/slice/articlesPageSlice';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';

const reducers: ReducerList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = () => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const articles = useSelector(getArticles.selectAll);

  const onChangeView = (view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  };

  const onLoadNextPart = () => {
    dispatch(fetchNextArticlesPage());
  };

  useEffect(() => {
    dispatch(initArticlesPage());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page onScrollEnd={onLoadNextPart}>
        <Container maxW='container.md'>
          <Stack spacing={4} py={4}>
            <ArticleViewSelector
              currentView={view}
              onViewClick={onChangeView}
            />
            <ArticleList
              isLoading={isLoading}
              view={view}
              articles={articles}
            />
          </Stack>
        </Container>
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
