import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

export const getProfileForm = (state: StateSchema) =>
  state.profile?.form ?? {
    age: 0,
    city: '',
    country: Country.Russia,
    currency: Currency.RUB,
    firstname: '',
    lastname: '',
    username: '',
    avatar: '',
  };
