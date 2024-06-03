import { useTranslation } from 'react-i18next';
import { Heading } from '@chakra-ui/react';
import { ArticleList } from '@/entities/Article';

import { useGetArticleRecommendationsListQuery } from '../../api/articleRecommendationsApi';

export const ArticleRecommendationsList = () => {
  const { t } = useTranslation();
  const { isLoading, error, data } = useGetArticleRecommendationsListQuery(3);

  if (isLoading || error) {
    return null;
  }

  return (
    <>
      <Heading as='h3' size='md' fontWeight='semibold'>
        {t('recommend')}
      </Heading>
      <ArticleList
        articles={data ?? []}
        wrap='nowrap'
        overflowX='auto'
        overflowY='hidden'
        target='_blank'
      />
    </>
  );
};
