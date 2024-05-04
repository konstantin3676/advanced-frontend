import { Flex } from '@chakra-ui/react';

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
  const renderArticle = (article: Article) => (
    <ArticleListItem key={article.id} article={article} view={view} />
  );

  return (
    <Flex wrap='wrap' justify='space-between' gap={6}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
      {isLoading && getSkeletons(view)}
    </Flex>
  );
};
