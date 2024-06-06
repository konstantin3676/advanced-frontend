import { StarRating } from '@/shared/ui/StarRating/StarRating';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from '@chakra-ui/react';
import { useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

interface Props {
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onAccept?: (starsCount: number, feedback?: string) => void;
  onCancel?: (starsCount: number) => void;
  rate?: number;
}

export const Rating = ({
  title,
  feedbackTitle,
  hasFeedback,
  onAccept,
  onCancel,
  rate = 0,
}: Props) => {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState('');

  const onSelectStars = (selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount);

    if (hasFeedback) {
      setIsModalOpen(true);
    } else {
      onAccept?.(selectedStarsCount);
    }
  };

  const acceptHandler = () => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  };

  const cancelHandler = () => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  };

  return (
    <>
      <Card variant='outline' size='sm' w='100%'>
        <CardHeader>
          <Center>
            <Heading as='h4' size='md' fontWeight='medium'>
              {starsCount ? t('thanks-for-review') : title}
            </Heading>
          </Center>
        </CardHeader>
        <CardBody>
          <Center>
            <StarRating
              selectedStars={starsCount}
              size={12}
              onSelect={onSelectStars}
            />
          </Center>
        </CardBody>
      </Card>
      <BrowserView>
        <Modal isOpen={isModalOpen} onClose={cancelHandler}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{feedbackTitle}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder={t('your-feedback')}
              />
            </ModalBody>
            <ModalFooter>
              <Button
                size='sm'
                colorScheme='teal'
                mr={3}
                onClick={cancelHandler}
              >
                {t('close')}
              </Button>
              <Button size='sm' variant='ghost' onClick={acceptHandler}>
                {t('send')}
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer placement='bottom' onClose={cancelHandler} isOpen={isModalOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>{feedbackTitle}</DrawerHeader>
            <DrawerBody>
              <Textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder={t('your-feedback')}
              />
            </DrawerBody>
            <DrawerFooter>
              <Button
                size='sm'
                colorScheme='teal'
                mr={3}
                onClick={cancelHandler}
              >
                {t('close')}
              </Button>
              <Button size='sm' variant='ghost' onClick={acceptHandler}>
                {t('send')}
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </MobileView>
    </>
  );
};
