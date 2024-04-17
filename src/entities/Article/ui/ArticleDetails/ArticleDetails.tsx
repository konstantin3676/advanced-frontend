import {
  Box,
  Center,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from '@chakra-ui/react';
import {
  DynamicModuleLoader,
  ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';

const reducer: ReducerList = {
  articleDetails: articleDetailsReducer,
};

interface Props {
  id: string;
}

export const ArticleDetails = ({ id }: Props) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);
  let content;

  if (isLoading) {
    content = (
      <Flex direction='column' gap={6}>
        <Flex justify='center'>
          <SkeletonCircle size='112' />
        </Flex>
        <SkeletonText noOfLines={4} spacing='4' skeletonHeight='4' />
        <Skeleton height='200px' />
        <SkeletonText noOfLines={4} spacing='4' skeletonHeight='4' />
        <Skeleton height='200px' />
        <SkeletonText noOfLines={4} spacing='4' skeletonHeight='4' />
      </Flex>
    );
  } else if (error) {
    content = <Center h='100%'>{t('article-loading-error')}</Center>;
  } else {
    content = <Box>56565</Box>;
  }

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  return (
    <DynamicModuleLoader reducers={reducer}>
      <Container maxW='container.md'>{content}</Container>
    </DynamicModuleLoader>
  );
};
