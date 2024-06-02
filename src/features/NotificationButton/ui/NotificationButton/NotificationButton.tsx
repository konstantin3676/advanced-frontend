import {
  IconButton,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react';
import { NotificationList } from 'entities/Notification';
import { MdOutlineNotifications } from 'react-icons/md';

export const NotificationButton = () => {
  return (
    <Popover isLazy>
      <PopoverTrigger>
        <IconButton
          isRound
          aria-label='Notifications'
          variant='ghost'
          colorScheme='teal'
          size='sm'
          icon={<MdOutlineNotifications size={24} />}
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverBody maxH='320px' overflowY='auto'>
          <NotificationList />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
