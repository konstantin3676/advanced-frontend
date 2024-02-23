import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm';
import { useTranslation } from 'react-i18next';
import { ModalDialog } from 'shared/ui/ModalDialog/ModalDialog';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ isOpen, onClose }: Props) => {
  const { t } = useTranslation();

  return (
    <ModalDialog title={t('auth')} isOpen={isOpen} onClose={onClose}>
      <LoginForm />
    </ModalDialog>
  );
};
