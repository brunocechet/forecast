import React from 'react';

// RTL
import { render } from '@testing-library/react';

// Components
import TestProvider from 'src/utils/TestProvider';
import City from './City';

test('Should render the component', () => {
  const { container } = render(
    <TestProvider>
      <City />
    </TestProvider>
  );

  expect(container).toBeInTheDocument();
});
