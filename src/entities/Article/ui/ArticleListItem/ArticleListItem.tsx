import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Icon,
  Image,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
} from '@chakra-ui/react';
import { MdOutlineVisibility } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import { Link as ReactRouterLink } from 'react-router-dom';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { Article, ArticleTextBlock } from '../../model/types/article';
import { ArticleBlockType, ArticleView } from '../../model/consts/consts';

interface Props {
  article: Article;
  view: ArticleView;
  target?: React.HTMLAttributeAnchorTarget;
}

export const ArticleListItem = ({ article, view, target }: Props) => {
  const { t } = useTranslation();

  const types = <Text noOfLines={1}>{article.type.join(', ')}</Text>;

  const views = (
    <Flex align='center' gap={2}>
      <Text>{article.views}</Text>
      <Icon as={MdOutlineVisibility} boxSize={5} />
    </Flex>
  );

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(
      ({ type }) => type === ArticleBlockType.TEXT
    ) as ArticleTextBlock;

    return (
      <Card variant='outline' w='100%'>
        <CardHeader>
          <Stack spacing={2}>
            <Flex align='center' justify='space-between'>
              <Flex align='center' gap={4}>
                <Image
                  borderRadius='full'
                  boxSize={10}
                  src={article.user.avatar}
                  alt={t('avatar')}
                />
                <Heading as='h4' size='md' fontWeight='medium'>
                  {article.user.username}
                </Heading>
              </Flex>
              <Text>{article.createdAt}</Text>
            </Flex>
            <Heading as='h3' size='md' fontWeight='semibold' noOfLines={1}>
              {article.title}
            </Heading>
            {types}
          </Stack>
        </CardHeader>
        <CardBody>
          <Stack spacing={2} maxH={490} overflowY='hidden'>
            <Image
              src={article.img}
              alt={article.title}
              w='100%'
              maxH={250}
              objectFit='cover'
              borderRadius='lg'
            />
            {textBlock && <ArticleTextBlockComponent block={textBlock} />}
          </Stack>
        </CardBody>
        <CardFooter>
          <Flex justify='space-between' w='100%'>
            <Button
              size='sm'
              colorScheme='teal'
              as={ReactRouterLink}
              to={`${RoutePath.article_details}${article.id}`}
              target={target}
            >
              {t('read-more')}
            </Button>
            {views}
          </Flex>
        </CardFooter>
      </Card>
    );
  }

  return (
    <LinkBox>
      <Card
        size='sm'
        variant='outline'
        minW={222}
        maxW='3xs'
        cursor='pointer'
        transition='box-shadow 0.3s'
        _hover={{
          boxShadow: 'md',
          '& .date': {
            opacity: 1,
          },
        }}
      >
        <CardBody>
          <Stack spacing={2}>
            <Box position='relative'>
              <Image
                src={article.img}
                alt={article.title}
                h={200}
                objectFit='cover'
                borderRadius='lg'
              />
              <Text
                className='date'
                position='absolute'
                top={2}
                right={2}
                opacity={0}
                color='white'
                transition='opacity 0.3s'
              >
                {article.createdAt}
              </Text>
            </Box>
            <Flex align='center' justify='space-between'>
              {types}
              {views}
            </Flex>
            <LinkOverlay
              as={ReactRouterLink}
              to={`${RoutePath.article_details}${article.id}`}
              target={target}
            >
              <Heading as='h3' size='md' fontWeight='semibold' noOfLines={1}>
                {article.title}
              </Heading>
            </LinkOverlay>
          </Stack>
        </CardBody>
      </Card>
    </LinkBox>
  );
};
