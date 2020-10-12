import React from 'react';

import { Button, IconButton, makeStyles, Typography, Grid } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import useSearchHistory from 'hooks/useSearchHistory';

import { useHistory } from 'react-router-dom';

// Styles
import styles from './SearchHistory.styles';

const useStyles = makeStyles(styles);

function SearchHistory() {
  const { items, remove } = useSearchHistory();

  const classes = useStyles();
  const history = useHistory();

  const handleItemClick = cityName => {
    cityName && history.push(`/city/${cityName}`);
  };

  const handleDeleteItem = cityName => {
    remove(cityName);
  };

  const renderItems = () =>
    items.map(item => (
      <React.Fragment key={item}>
        <Button
          variant="outlined"
          color="primary"
          aria-label={`search for ${item}`}
          title={`Search for ${item}`}
          onClick={() => handleItemClick(item)}
          className={classes.historyButton}
        >
          {item}
        </Button>
        <IconButton aria-label="delete" className={classes.deleteButton} onClick={() => handleDeleteItem(item)}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
    ));

  return items.length ? (
    <Grid container>
      <Grid item xs={12}>
        <Typography align="center" variant="h4">
          Search History
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.buttonsContainer}>
        {renderItems()}
      </Grid>
    </Grid>
  ) : null;
}

export default SearchHistory;
