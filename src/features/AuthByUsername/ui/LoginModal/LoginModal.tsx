import { useTranslation } from 'react-i18next';
import { ModalDialog } from '@/shared/ui/ModalDialog/ModalDialog';
import { Suspense } from 'react';
import { Fallback } from '@/widgets/Fallback';

import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ isOpen, onClose }: Props) => {
  const { t } = useTranslation();

  return (
    <ModalDialog title={t('auth')} isOpen={isOpen} onClose={onClose}>
      <Suspense fallback={<Fallback height='244px' />}>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </ModalDialog>
  );
};
