import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
} from '@chakra-ui/react';
import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import {
  DynamicModuleLoader,
  ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useEffect } from 'react';
import { AddCommentForm } from 'features/AddCommentForm';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page/Page';

import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from '../../model/slice/articleDetailsCommentsSlice';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';

const reducers: ReducerList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  const onBackToList = () => {
    navigate(RoutePath.articles);
  };

  const handleSendComment = (text: string) => {
    dispatch(addCommentForArticle(text));
  };

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  }, [dispatch, id]);

  if (!id) {
    return <Center h='100%'>{t('article-not-found')}</Center>;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page>
        <Container maxW='container.md'>
          <Flex direction='column' gap={6} py={4}>
            <Box>
              <Button
                variant='link'
                size='sm'
                colorScheme='teal'
                onClick={onBackToList}
              >
                {t('back-to-list')}
              </Button>
            </Box>
            <ArticleDetails id={id} />
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
