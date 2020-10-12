import React from 'react';

// RTL
import { render } from '@testing-library/react';

// Components
import Home from './Home';

test('Should render the component', () => {
  const { container } = render(<Home />);

  expect(container).toBeInTheDocument();
});
