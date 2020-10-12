import React from 'react';

// RTL
import { render } from '@testing-library/react';

// Components
import CityNotFound from './CityNotFound';

test('Should render the component', () => {
  const { container } = render(<CityNotFound />);

  expect(container).toBeInTheDocument();
});
