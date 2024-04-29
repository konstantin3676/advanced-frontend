import { Center, Container, Flex, Heading } from '@chakra-ui/react';
import { ArticleDetails } from 'entities/Article';
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

import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from '../../model/slice/articleDetailsCommentsSlice';

const reducers: ReducerList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  }, [dispatch, id]);

  if (!id) {
    return <Center h='100%'>{t('article-not-found')}</Center>;
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Container maxW='container.md'>
        <Flex direction='column' gap={6} py={4}>
          <ArticleDetails id={id} />
          <Heading as='h3' size='md' fontWeight='semibold'>
            {t('comments')}
          </Heading>
          <CommentList comments={comments} isLoading={commentsIsLoading} />
        </Flex>
      </Container>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
