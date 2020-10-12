import React from 'react';

// RTL
import { render } from '@testing-library/react';

// Components
import SearchInput from './SearchInput';

test('Should render the component', () => {
  const { container } = render(<SearchInput name="test" />);

  expect(container).toBeInTheDocument();
});
