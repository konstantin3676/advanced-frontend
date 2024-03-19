import { Box } from '@chakra-ui/react';
import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import {
  DynamicModuleLoader,
  ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const reducers: ReducerList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const { t } = useTranslation();

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Box>{t('profile')}</Box>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
