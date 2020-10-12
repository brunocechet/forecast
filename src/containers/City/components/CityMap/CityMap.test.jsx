import React from 'react';

// RTL
import { render } from '@testing-library/react';

// Components
import CityMap from './CityMap';

test('Should render the component', () => {
  const coordinates = { lat: 1, lon: 2 };

  const { container } = render(<CityMap coordinates={coordinates} />);

  expect(container).toBeInTheDocument();
});
