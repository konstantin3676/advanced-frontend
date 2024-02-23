import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

interface Props {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const ModalDialog = ({ title, isOpen, children, onClose }: Props) => {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        {children}
      </ModalContent>
    </Modal>
  );
};
