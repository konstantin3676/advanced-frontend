import type { Preview } from '@storybook/react';
import { theme } from '../../src/app/styles/theme';
import i18n from '../../src/shared/config/i18n/i18n';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator';
import { TranslationDecorator } from '../../src/shared/config/storybook/TranslationDecorator';

const preview: Preview = {
  globals: {
    locale: 'ru',
    locales: {
      ru: 'Русский',
      en: 'English',
    },
  },
  parameters: {
    i18n,
    actions: {
      argTypesRegex: '^on[A-Z].*',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    chakra: {
      theme,
    },
  },
  decorators: [StyleDecorator, RouterDecorator, TranslationDecorator],
};

export default preview;
