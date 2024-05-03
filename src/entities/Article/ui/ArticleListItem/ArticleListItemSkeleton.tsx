import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from '@chakra-ui/react';

import { ArticleView } from '../../model/types/article';

interface Props {
  view: ArticleView;
}

export const ArticleListItemSkeleton = ({ view }: Props) => {
  if (view === ArticleView.BIG) {
    return (
      <Card variant='outline' w='100%'>
        <CardHeader>
          <Stack spacing={2}>
            <Flex align='center' justify='space-between'>
              <Flex align='center' gap={4}>
                <SkeletonCircle size='10' />
                <Skeleton w={150} h={5} />
              </Flex>
              <Skeleton w={100} h={5} />
            </Flex>
            <Skeleton w={250} h={5} />
          </Stack>
        </CardHeader>
        <CardBody>
          <Skeleton w='100%' h={60} />
        </CardBody>
        <CardFooter>
          <Skeleton w={200} h={5} />
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card size='sm' variant='outline' maxW='3xs' cursor='pointer'>
      <CardBody>
        <Stack spacing={2}>
          <Skeleton w={200} h={200} />
          <SkeletonText noOfLines={2} spacing='2' skeletonHeight='4' />
        </Stack>
      </CardBody>
    </Card>
  );
};
