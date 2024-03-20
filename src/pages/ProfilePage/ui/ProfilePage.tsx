import { Flex } from '@chakra-ui/react';
import {
  fetchProfileData,
  ProfileCard,
  profileReducer,
} from 'entities/Profile';
import { useEffect } from 'react';
import {
  DynamicModuleLoader,
  ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

const reducers: ReducerList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Flex justify='center'>
        <ProfileCard />
      </Flex>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
