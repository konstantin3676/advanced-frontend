import { Flex, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Article, ArticleView } from '../../model/types/article';

interface Props {
  articles: Article[];
  view?: ArticleView;
  isLoading?: boolean;
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((_, index) => <ArticleListItemSkeleton key={index} view={view} />);
};

export const ArticleList = ({
  articles,
  view = ArticleView.SMALL,
  isLoading,
}: Props) => {
  const { t } = useTranslation();

  const renderArticle = (article: Article) => (
    <ArticleListItem key={article.id} article={article} view={view} />
  );

  if (!isLoading && articles.length === 0) {
    return <Text>{t('articles-not-found')}</Text>;
  }

  return (
    <Flex wrap='wrap' justify='space-between' gap={6}>
      {articles.length > 0 && articles.map(renderArticle)}
      {isLoading && getSkeletons(view)}
    </Flex>
  );
};
