import React from 'react';

// RTL
import { render } from '@testing-library/react';

// Components
import SearchHistory from './SearchHistory';

test('Should render the component', () => {
  const { container } = render(<SearchHistory />);

  expect(container).toBeInTheDocument();
});
