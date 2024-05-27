import { Flex, Text } from '@chakra-ui/react';
import {
  EditableProfileCard,
  profileReducer,
} from 'features/EditableProfileCard';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import {
  DynamicModuleLoader,
  ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from 'widgets/Page/Page';

const reducers: ReducerList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Text>{t('profile-not-found')}</Text>;
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page>
        <Flex justify='center' pt={5}>
          <EditableProfileCard id={id} />
        </Flex>
      </Page>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
