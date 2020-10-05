import { useQuery } from 'react-query';

// Utils
import transformObjectData from './utils/transformObjectData';

const {
  REACT_APP_OWM_API_KEY,
  REACT_APP_OWM_API_URL,
  REACT_APP_OWM_API_MODE,
  REACT_APP_OWM_API_UNITS,
  REACT_APP_OWM_API_LANG
} = process.env;

const getCityByName = async (_, cityName) => {
  const params = new URLSearchParams();
  params.append('appid', REACT_APP_OWM_API_KEY);
  params.append('lang', REACT_APP_OWM_API_LANG);
  params.append('mode', REACT_APP_OWM_API_MODE);
  params.append('q', cityName);
  params.append('units', REACT_APP_OWM_API_UNITS);

  const data = await fetch(`${REACT_APP_OWM_API_URL}?${params.toString()}`).then(response => response.json());

  return transformObjectData(data);
};

export default function useCityQuery(cityName) {
  return useQuery(['city', cityName], getCityByName);
}
