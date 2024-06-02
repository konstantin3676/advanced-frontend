import { Skeleton, VStack } from '@chakra-ui/react';

import { useGetNotificationsQuery } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';

export const NotificationList = () => {
  const { data, isLoading } = useGetNotificationsQuery(null, {
    pollingInterval: 5000,
  });

  if (isLoading) {
    return (
      <VStack align='stretch'>
        <Skeleton h='92px' />
        <Skeleton h='92px' />
        <Skeleton h='92px' />
      </VStack>
    );
  }

  return (
    <VStack align='stretch'>
      {data?.map((item) => (
        <NotificationItem key={item.id} item={item} />
      ))}
    </VStack>
  );
};
