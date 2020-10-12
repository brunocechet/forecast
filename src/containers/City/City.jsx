import React, { useEffect } from 'react';

import { useParams, useHistory } from 'react-router-dom';
import { Grid, Typography, Box, Tooltip, Button } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import useSearchHistory from 'hooks/useSearchHistory';
import useCityQuery from './hooks/useCityQuery';

import CityImage from './components/CityImage';
import CityMap from './components/CityMap';
import CityNotFound from './components/CityNotFound';
import CityTemperature from './components/CityTemperature';
import LocalDateTime from './components/LocalDateTime';

function City() {
  const { name } = useParams();
  const history = useHistory();

  const {add: addCityToHistory} = useSearchHistory();

  const { isLoading, data } = useCityQuery(name);

  useEffect(() => {
    name && addCityToHistory(name);
  }, [addCityToHistory, name]);

  if (isLoading) {
    return 'Loading...';
  }

  const { coord, humidity, location, pressure, temperature, weather, error, errorCode, localTime, localDate } = data;

  if (error && errorCode === 404) {
    return <CityNotFound />;
  }

  const handleBackToHome = () => {
    history.push('/');
  };

  return (
    <Grid container spacing={6}>
      <Grid item xs={6}>
        <Button color="secondary" onClick={handleBackToHome} startIcon={<ArrowBackIosIcon />} variant="contained">
          Back
        </Button>
      </Grid>
      <Grid item xs={6}>
        <LocalDateTime localTime={localTime} localDate={localDate} />
      </Grid>
      <Grid item xs={4}>
        <Box textAlign="right">
          <img src={weather.imageUrl} alt={weather.description} title={weather.description} />
          <Typography variant="h3" component="h1">{`${location.city}, ${location.country}`}</Typography>
          <Tooltip title={weather.description} aria-label={weather.description} arrow placement="right">
            <Typography variant="h4" component="h2">{`It's ${weather.title}`}</Typography>
          </Tooltip>
          <CityTemperature temperature={temperature} />
        </Box>
      </Grid>
      <Grid item xs={4}>
        <CityImage coordinates={coord} />
      </Grid>
      <Grid item xs={4}>
        <CityMap coordinates={coord} />
      </Grid>
      <Grid item xs={12}>
        <Box textAlign="right">
          <Typography variant="h6" component="p">{`Pressure: ${pressure}`}</Typography>
          <Typography variant="h6" component="p">{`Humidity: ${humidity}`}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default City;
