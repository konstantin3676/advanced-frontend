import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react';
import { NotificationList } from '@/entities/Notification';
import { useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { MdOutlineNotifications } from 'react-icons/md';

export const NotificationButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const trigger = (
    <IconButton
      isRound
      aria-label='Notifications'
      variant='ghost'
      colorScheme='teal'
      size='sm'
      icon={<MdOutlineNotifications size={24} />}
      onClick={handleToggle}
    />
  );
  return (
    <>
      <BrowserView>
        <Popover isLazy>
          <PopoverTrigger>{trigger}</PopoverTrigger>
          <PopoverContent>
            <PopoverBody maxH='320px' overflowY='auto'>
              <NotificationList />
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </BrowserView>
      <MobileView>
        {trigger}
        <Drawer placement='bottom' onClose={handleToggle} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody maxH='320px' overflowY='auto'>
              <NotificationList />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </MobileView>
    </>
  );
};
