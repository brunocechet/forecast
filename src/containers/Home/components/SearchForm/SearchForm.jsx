import React from 'react';

import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

// Components
import SearchInput from './components/SearchInput';

// Styles
import styles from './SearchForm.styles';

const useStyles = makeStyles(styles);

function SearchForm() {
  const classes = useStyles();
  const history = useHistory();

  const handleOnSubmit = event => {
    event.preventDefault();
    const cityName = event.target['city-name'].value;

    cityName && history.push(`/city/${cityName}`);
  };

  return (
    <Paper component="form" onSubmit={handleOnSubmit} elevation={1} className={classes.root}>
      <SearchInput name="city-name" />
    </Paper>
  );
}

export default SearchForm;
