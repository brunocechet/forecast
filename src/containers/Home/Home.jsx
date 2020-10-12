import React from 'react';

import { Grid } from '@material-ui/core';

// Components
import SearchForm from './components/SearchForm';
import SearchHistory from './components/SearchHistory';

function Home() {
  return (
    <Grid container alignItems="center">
      <Grid item xs={12}>
        <SearchForm />
      </Grid>
      <Grid item xs={12}>
        <SearchHistory />
      </Grid>
    </Grid>
  );
}

export default Home;
