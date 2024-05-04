import { Flex } from '@chakra-ui/react';
import {
  EditableProfileCard,
  fetchProfileData,
  profileReducer,
} from 'features/EditableProfileCard';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  DynamicModuleLoader,
  ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from 'shared/ui/Page/Page';

const reducers: ReducerList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  }, [dispatch, id]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page>
        <Flex justify='center' pt={5}>
          <EditableProfileCard />
        </Flex>
      </Page>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
