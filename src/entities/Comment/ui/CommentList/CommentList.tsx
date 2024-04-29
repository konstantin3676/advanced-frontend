import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Text,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';

interface Props {
  comments: Comment[];
  isLoading: boolean;
}

export const CommentList = ({ comments, isLoading }: Props) => {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <Card variant='outline'>
        <CardHeader>
          <Flex align='center' gap={4} w='100%'>
            <SkeletonCircle size='10' />
            <Skeleton height='20px' flexGrow={1} />
          </Flex>
        </CardHeader>
        <CardBody>
          <SkeletonText noOfLines={4} spacing='4' skeletonHeight='4' />
        </CardBody>
      </Card>
    );
  }

  return comments?.length > 0 ? (
    comments.map((comment) => (
      <CommentCard key={comment.id} comment={comment} />
    ))
  ) : (
    <Text>{t('no-comments')}</Text>
  );
};
