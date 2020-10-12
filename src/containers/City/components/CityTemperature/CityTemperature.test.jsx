import React from 'react';

// RTL
import { render } from '@testing-library/react';

// Components
import CityTemperature from './CityTemperature';

test('Should render the component', () => {
  const temperature = {
    min: '15o',
    max: '30o',
    actual: '25o'
  };

  const { container } = render(<CityTemperature temperature={temperature} />);

  expect(container).toBeInTheDocument();
});
