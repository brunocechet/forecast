import React from 'react';

// RTL
import { render } from '@testing-library/react';

// Components
import LocalDateTime from './LocalDateTime';

test('Should render the component', () => {
  const { container } = render(<LocalDateTime localTime="12:00" localDate="11/10/2020" />);

  expect(container).toBeInTheDocument();
});
