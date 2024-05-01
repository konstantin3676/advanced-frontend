import { lazy } from 'react';

import { AddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync = lazy<React.FC<AddCommentFormProps>>(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import('./AddCommentForm')), 1500);
    })
);
