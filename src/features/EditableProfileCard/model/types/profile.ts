import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export interface Profile {
  firstname?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  isLoading: boolean;
  readonly: boolean;
  data?: Profile;
  form?: Profile;
  error?: string;
}
