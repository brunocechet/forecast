import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import getCityImage from './services/getCityImage';

function CityImage({ lat, lon }) {
  const [imageUrl, setImageUrl] = useState('');
  const [imageTitle, setImageTitle] = useState('');

  const loadCityImage = useCallback(async () => {
    const { url, title } = await getCityImage(lat, lon);

    setImageUrl(url);
    setImageTitle(title);
  }, [lat, lon]);

  useEffect(() => {
    lat && lon && loadCityImage();
  }, [lat, lon, loadCityImage]);

  return imageUrl && imageTitle ? <img src={imageUrl} title={imageTitle} alt={imageTitle} /> : null;
}

CityImage.propTypes = {
  lat: PropTypes.number.isRequired,
  lon: PropTypes.number.isRequired
};

export default CityImage;
