import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import mapboxgl from 'mapbox-gl';

import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import styles from './CityMap.styles';

mapboxgl.accessToken = 'pk.eyJ1IjoiYnJ1bm9jZWNoZXQiLCJhIjoiY2tmeXRwMHFzMThvNjJzb2tzaWFoNTFoaCJ9.5ipdSZVNwScZXW44gmmdnw';

const MAPBOX_CONTAINER_ID = 'mapbox-container';

const useStyles = makeStyles(styles);

function CityMap({ coordinates }) {
  const classes = useStyles();

  useEffect(() => {
    // eslint-disable-next-line no-new
    new mapboxgl.Map({
      container: MAPBOX_CONTAINER_ID,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [coordinates.lon, coordinates.lat],
      zoom: 10
    });
  }, [coordinates]);

  return <Box boxShadow={3} className={classes.largeSize} id={MAPBOX_CONTAINER_ID} />;
}

CityMap.defaultProps = {
  coordinates: {}
};

CityMap.propTypes = {
  coordinates: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired
  })
};

export default CityMap;
