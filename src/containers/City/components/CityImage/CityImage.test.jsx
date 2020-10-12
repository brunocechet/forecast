import React from 'react';

// RTL
import { render } from '@testing-library/react';

// Components
import CityImage from './CityImage';

test('Should render the component', () => {
  const coordinates = { lat: 1, lon: 2 };

  const { container } = render(<CityImage coordinates={coordinates} />);

  expect(container).toBeInTheDocument();
});
