import { Button, Card, CardBody, Flex, Textarea } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  DynamicModuleLoader,
  ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../modal/slice/addCommentFormSlice';
import { getAddCommentFormText } from '../../modal/selectors/addCommentFormSelectors';

const reducers: ReducerList = {
  addCommentForm: addCommentFormReducer,
};

export interface AddCommentFormProps {
  handleSendComment: (text: string) => void;
}

const AddCommentForm = ({ handleSendComment }: AddCommentFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const text = useSelector(getAddCommentFormText);

  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(addCommentFormActions.setText(e.target.value));
  };

  const onSendHandler = () => {
    handleSendComment(text ?? '');
    dispatch(addCommentFormActions.setText(''));
  };

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Card variant='outline'>
        <CardBody>
          <Flex direction='column' alignItems='flex-end' gap={4}>
            <Textarea
              value={text}
              onChange={handleChangeText}
              placeholder={t('enter-comment')}
            />
            <Button size='sm' colorScheme='teal' onClick={onSendHandler}>
              {t('send')}
            </Button>
          </Flex>
        </CardBody>
      </Card>
    </DynamicModuleLoader>
  );
};

export default AddCommentForm;
