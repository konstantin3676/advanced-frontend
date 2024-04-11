import { Button, CardHeader, Flex, Heading } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';

export const EditableProfileCardHeader = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const readonly = useSelector(getProfileReadonly);

  const onEdit = () => {
    dispatch(profileActions.setReadonly(false));
  };

  const onCancelEdit = () => {
    dispatch(profileActions.cancelEdit());
  };

  const onSave = () => {
    dispatch(updateProfileData());
  };

  return (
    <CardHeader>
      <Flex align='center' justify='space-between'>
        <Heading>{t('profile')}</Heading>
        {readonly ? (
          <Button size='sm' colorScheme='teal' onClick={onEdit}>
            {t('edit')}
          </Button>
        ) : (
          <Flex gap={2}>
            <Button size='sm' colorScheme='pink' onClick={onCancelEdit}>
              {t('cancel')}
            </Button>
            <Button size='sm' colorScheme='teal' onClick={onSave}>
              {t('save')}
            </Button>
          </Flex>
        )}
      </Flex>
    </CardHeader>
  );
};
