import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { Comment } from '../../model/types/comment';

interface Props {
  comment: Comment;
}

export const CommentCard = ({ comment }: Props) => {
  const { t } = useTranslation();

  return (
    <Card variant='outline'>
      <CardHeader>
        <Flex align='center' gap={4}>
          {comment.user.avatar && (
            <Image
              borderRadius='full'
              boxSize={10}
              src={comment.user.avatar}
              alt={t('avatar')}
            />
          )}
          <Heading as='h4' size='md' fontWeight='medium'>
            {comment.user.username}
          </Heading>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>{comment.text}</Text>
      </CardBody>
    </Card>
  );
};
