import { Rating } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Skeleton } from '@chakra-ui/react';

import {
  useGetArticleRatingQuery,
  useRateArticleMutation,
} from '../../api/articleRatingApi';

interface Props {
  articleId: string;
}

export const ArticleRating = ({ articleId }: Props) => {
  const { t } = useTranslation();
  const userData = useSelector(getUserAuthData);
  const { data, isLoading } = useGetArticleRatingQuery({
    articleId,
    userId: userData?.id ?? '',
  });
  const [rateArticleMutation] = useRateArticleMutation();

  const rating = data?.[0];

  const handleRateArticle = (starsCount: number, feedback?: string) => {
    try {
      rateArticleMutation({
        articleId,
        feedback,
        rate: starsCount,
        userId: userData?.id ?? '',
      });
    } catch (e) {
      console.log(e);
    }
  };

  const onAccept = (starsCount: number, feedback?: string) => {
    handleRateArticle(starsCount, feedback);
  };

  const onCancel = (starsCount: number) => {
    handleRateArticle(starsCount);
  };

  if (isLoading) {
    return <Skeleton h='120px' />;
  }

  return (
    <Rating
      hasFeedback
      rate={rating?.rate}
      title={t('rate-article')}
      feedbackTitle={t('leave-review')}
      onAccept={onAccept}
      onCancel={onCancel}
    />
  );
};
