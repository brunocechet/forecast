import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

// Styles
import { makeStyles } from '@material-ui/core/styles';
import styles from './SearchInput.styles';

const useStyles = makeStyles(styles);

function SearchInput({ name }) {
  const classes = useStyles();

  return (
    <InputBase
      className={classes.input}
      fullWidth
      inputProps={{ 'aria-label': 'search by city name' }}
      name={name}
      placeholder="Search By City Name"
      type="search"
      endAdornment={
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      }
    />
  );
}

SearchInput.propTypes = {
  name: PropTypes.string.isRequired
};

export default SearchInput;
