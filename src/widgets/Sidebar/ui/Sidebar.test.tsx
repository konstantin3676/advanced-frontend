import { screen } from '@testing-library/react';
import { componentRender } from 'shared/config/tests/componentRender';
import { Sidebar } from 'widgets/Sidebar';

describe('Sidebar', () => {
  test('hasSidebar', () => {
    componentRender(<Sidebar />);

    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
});
