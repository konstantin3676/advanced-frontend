import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  FormControl,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
// import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';

export const ProfileCard = () => {
  const { t } = useTranslation();
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  // const error = useSelector(getProfileError);

  return (
    <Card minW='lg' variant='outline'>
      <CardHeader>
        <Heading>{t('profile')}</Heading>
      </CardHeader>
      <CardBody>
        <VStack spacing={3} maxW='2xs'>
          <FormControl>
            <Input value={data?.firstname} placeholder={t('firstname')} />
          </FormControl>
          <FormControl>
            <Input value={data?.lastname} placeholder={t('lastname')} />
          </FormControl>
        </VStack>
      </CardBody>
      <CardFooter justifyContent='flex-end'>
        <Button isDisabled={isLoading}>{t('edit')}</Button>
      </CardFooter>
    </Card>
  );
};
