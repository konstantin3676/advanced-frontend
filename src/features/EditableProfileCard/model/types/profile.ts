import { Profile } from '@/entities/Profile';

import { ValidateProfileError } from '../consts/consts';

export interface ProfileSchema {
  isLoading: boolean;
  readonly: boolean;
  data?: Profile;
  form?: Profile;
  error?: string;
  validateErrors?: ValidateProfileError[];
}
