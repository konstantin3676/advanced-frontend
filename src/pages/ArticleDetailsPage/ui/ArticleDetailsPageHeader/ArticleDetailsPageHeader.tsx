import { Button, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getArticleDetailsData } from '@/entities/Article';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';

import { getCanEditArticle } from '../../model/selectors/article';

export const ArticleDetailsPageHeader = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const canEdit = useSelector(getCanEditArticle);
  const article = useSelector(getArticleDetailsData);

  const onBackToList = () => {
    navigate(getRouteArticles());
  };

  const onEditArticle = () => {
    if (article?.id) {
      navigate(getRouteArticleEdit(article?.id));
    }
  };

  return (
    <Flex justify='space-between'>
      <Button
        variant='link'
        size='sm'
        colorScheme='teal'
        onClick={onBackToList}
      >
        {t('back-to-list')}
      </Button>
      {canEdit && (
        <Button
          variant='link'
          size='sm'
          colorScheme='teal'
          onClick={onEditArticle}
        >
          {t('edit')}
        </Button>
      )}
    </Flex>
  );
};
