import { Center, Container, Flex, Heading } from '@chakra-ui/react';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import {
  DynamicModuleLoader,
  ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useEffect } from 'react';
import { AddCommentForm } from 'features/AddCommentForm';
import { Page } from 'widgets/Page/Page';

import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleRecommendations } from '../../model/slice/articleDetailsRecommendationsSlice';
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { articleDetailsPageReducer } from '../../model/slice';

const reducers: ReducerList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const recommendationsIsLoading = useSelector(
    getArticleRecommendationsIsLoading
  );

  const handleSendComment = (text: string) => {
    dispatch(addCommentForArticle(text));
  };

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
  }, [dispatch, id]);

  if (!id) {
    return <Center h='100%'>{t('article-not-found')}</Center>;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page>
        <Container maxW='container.md'>
          <Flex direction='column' gap={6} py={4}>
            <ArticleDetailsPageHeader />
            <ArticleDetails id={id} />
            <Heading as='h3' size='md' fontWeight='semibold'>
              {t('recommend')}
            </Heading>
            <ArticleList
              articles={recommendations}
              isLoading={recommendationsIsLoading}
              wrap='nowrap'
              overflowX='auto'
              overflowY='hidden'
              target='_blank'
            />
            <Heading as='h3' size='md' fontWeight='semibold'>
              {t('comments')}
            </Heading>
            <AddCommentForm handleSendComment={handleSendComment} />
            <CommentList comments={comments} isLoading={commentsIsLoading} />
          </Flex>
        </Container>
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
