import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import { Avatar, Box } from '@material-ui/core';

import getCityImage from './services/getCityImage';

import styles from './CityImage.styles';

const useStyles = makeStyles(styles);

function CityImage({ coordinates }) {
  const [imageUrl, setImageUrl] = useState('');
  const [imageTitle, setImageTitle] = useState('');

  const classes = useStyles();

  const loadCityImage = useCallback(
    async (lat, lon) => {
      const { url, title } = await getCityImage(lat, lon);

      setImageUrl(url);
      setImageTitle(title);
    },
    [setImageUrl, setImageTitle]
  );

  useEffect(() => {
    const { lat, lon } = coordinates;

    lat && lon && loadCityImage(lat, lon);
  }, [coordinates, loadCityImage]);

  return imageUrl && imageTitle ? (
    <Box
      alt={imageTitle}
      boxShadow={3}
      className={classes.largeSize}
      component={Avatar}
      src={imageUrl}
      title={imageTitle}
    />
  ) : null;
}

CityImage.defaultProps = {
  coordinates: {}
};

CityImage.propTypes = {
  coordinates: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired
  })
};

export default CityImage;
