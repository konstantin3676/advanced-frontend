import {
  Center,
  Flex,
  Heading,
  Icon,
  Image,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Text,
} from '@chakra-ui/react';
import {
  DynamicModuleLoader,
  ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useEffect } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { MdOutlineCalendarMonth, MdOutlineVisibility } from 'react-icons/md';

import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { ArticleBlock } from '../../model/types/article';
import { ArticleBlockType } from '../../model/consts/consts';

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

  const renderBlock = (block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent key={block.id} block={block} />;
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent key={block.id} block={block} />;
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent key={block.id} block={block} />;
      default:
        return null;
    }
  };

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
    content = (
      <Flex direction='column' gap={6}>
        <Flex justify='center'>
          <Image
            borderRadius='full'
            objectFit='cover'
            boxSize={28}
            src={article?.img}
          />
        </Flex>
        <Flex direction='column' gap={2}>
          <Heading as='h2' size='2xl'>
            {article?.title}
          </Heading>
          <Heading as='h3' size='md' fontWeight='semibold'>
            {article?.subtitle}
          </Heading>
        </Flex>
        <Flex direction='column' gap={1}>
          <Flex align='center' gap={2}>
            <Icon as={MdOutlineVisibility} boxSize={5} />
            <Text>{article?.views}</Text>
          </Flex>
          <Flex align='center' gap={2}>
            <Icon as={MdOutlineCalendarMonth} boxSize={5} />
            <Text>{article?.createdAt}</Text>
          </Flex>
        </Flex>
        {article?.blocks.map(renderBlock)}
      </Flex>
    );
  }

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  return (
    <DynamicModuleLoader reducers={reducer} removeAfterUnmount={false}>
      {content}
    </DynamicModuleLoader>
  );
};
