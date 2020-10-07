import React from 'react';
import PropTypes from 'prop-types';

import { Box, Typography, Tooltip } from '@material-ui/core';

function LocalDateTime({ localTime, localDate }) {
  return (
    <Box textAlign="right">
      <Tooltip title="Local Time" aria-label="local time" arrow placement="right">
        <Typography variant="h6" component="p">
          {localTime}
        </Typography>
      </Tooltip>
      <Tooltip title="Local Date" aria-label="local date" arrow placement="right">
        <Typography variant="h6" component="p" color="secondary">
          {localDate}
        </Typography>
      </Tooltip>
    </Box>
  );
}

LocalDateTime.propTypes = {
  localTime: PropTypes.string.isRequired,
  localDate: PropTypes.string.isRequired
};

export default LocalDateTime;
