import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
  Link as ChakraLink,
  Text,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link as ReactRouterLink } from 'react-router-dom';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

import { Comment } from '../../model/types/comment';

interface Props {
  comment: Comment;
}

export const CommentCard = ({ comment }: Props) => {
  const { t } = useTranslation();

  return (
    <Card variant='outline'>
      <CardHeader>
        <ChakraLink
          as={ReactRouterLink}
          to={`${RoutePath.profile}${comment.user.id}`}
        >
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
        </ChakraLink>
      </CardHeader>
      <CardBody>
        <Text>{comment.text}</Text>
      </CardBody>
    </Card>
  );
};
