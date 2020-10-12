import React from 'react';
import PropTypes from 'prop-types';

import { MemoryRouter } from 'react-router-dom';

function TestProvider({ children }) {
  return <MemoryRouter>{children}</MemoryRouter>;
}

TestProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TestProvider;
