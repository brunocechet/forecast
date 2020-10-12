import React from 'react';

// RTL
import { render } from '@testing-library/react';

// Components
import SearchForm from './SearchForm';

test('Should render the component', () => {
  const { container } = render(<SearchForm />);

  expect(container).toBeInTheDocument();
});
