import { Heading } from '@chakra-ui/react';
import { CommentList } from '@/entities/Comment';
import { AddCommentForm } from '@/features/AddCommentForm';
import { t } from 'i18next';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';

interface Props {
  id: string;
}

export const ArticleDetailsComments = ({ id }: Props) => {
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  const handleSendComment = (text: string) => {
    dispatch(addCommentForArticle(text));
  };

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  }, [dispatch, id]);
  return (
    <>
      <Heading as='h3' size='md' fontWeight='semibold'>
        {t('comments')}
      </Heading>
      <AddCommentForm handleSendComment={handleSendComment} />
      <CommentList comments={comments} isLoading={commentsIsLoading} />
    </>
  );
};
