import React from 'react';
import PropTypes from 'prop-types';

import { Typography, Tooltip } from '@material-ui/core';

function CityTemperature({ temperature }) {
  return (
    <>
      <Tooltip
        aria-label="actual temperature in celsius degrees"
        arrow
        placement="right"
        title="Actual temperature in Celsius degrees"
      >
        <Typography variant="h3" component="p">
          {temperature.actual}
        </Typography>
      </Tooltip>
      <Tooltip
        aria-label="min and max temperature in celsius degrees"
        arrow
        placement="right"
        title="Min and max temperature in Celsius degrees"
      >
        <Typography variant="h6" component="p">
          {temperature.min} - {temperature.max}
        </Typography>
      </Tooltip>
    </>
  );
}

CityTemperature.propTypes = {
  temperature: PropTypes.shape({
    min: PropTypes.string.isRequired,
    max: PropTypes.string.isRequired,
    actual: PropTypes.string.isRequired
  })
};

CityTemperature.defaultProps = {
  temperature: {}
};

export default CityTemperature;
