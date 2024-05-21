import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import i18nForTests from '../i18n/i18nForTests';

export interface ComponentRenderOptions {
  route?: string;
}

export function componentRender(
  component: React.ReactNode,
  { route = '/' }: ComponentRenderOptions = {}
) {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
    </MemoryRouter>
  );
}
