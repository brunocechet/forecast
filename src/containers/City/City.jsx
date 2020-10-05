import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

// Hooks
import useSearchHistory from 'hooks/useSearchHistory';
import useCityQuery from './hooks/useCityQuery';

function City() {
  const { name } = useParams();
  const [addCityToHistory] = useSearchHistory();

  const { isLoading, isError, data, error } = useCityQuery(name);

  const { coord, humidity, location, pressure, temperature, weather } = data ?? {};

  useEffect(() => {
    addCityToHistory(name);
  }, [addCityToHistory, name]);

  if (isLoading) {
    return 'Loading...';
  }

  return <div>Parametro name: {name}</div>;
}

export default City;
