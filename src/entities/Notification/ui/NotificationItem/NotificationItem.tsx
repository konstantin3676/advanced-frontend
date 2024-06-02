import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Link as ChakraLink,
  Text,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

import { Notification } from '../../model/types/notification';

interface Props {
  item: Notification;
}

export const NotificationItem = ({
  item: { title, description, href },
}: Props) => {
  const content = (
    <Card variant='outline' size='sm'>
      <CardHeader>
        <Heading size='sm' fontWeight='semibold'>
          {title}
        </Heading>
      </CardHeader>
      <CardBody>
        <Text>{description}</Text>
      </CardBody>
    </Card>
  );

  if (href) {
    return (
      <ChakraLink
        as={ReactRouterLink}
        to={href}
        target='_blank'
        _hover={{
          textDecoration: 'none',
        }}
      >
        {content}
      </ChakraLink>
    );
  }

  return content;
};
