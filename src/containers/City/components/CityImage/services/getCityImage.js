import getRandomInt from './utils/getRandomInt';

const { REACT_APP_FLICK_API_URL, REACT_APP_FLICKR_API_KEY } = process.env;

async function getCityImage(lat, lon) {
  const params = new URLSearchParams();

  params.append('api_key', REACT_APP_FLICKR_API_KEY);
  params.append('content_type', 1);
  params.append('format', 'json');
  params.append('is_getty', true);
  params.append('lat', lat);
  params.append('lon', lon);
  params.append('media', 'photos');
  params.append('method', 'flickr.photos.search');
  params.append('nojsoncallback', 1);
  params.append('per_page', 5);
  params.append('sort', 'interestingness-desc');

  const {
    photos: { photo }
  } = await fetch(`${REACT_APP_FLICK_API_URL}?${params.toString()}`).then(response => response.json());

  const cityPhotos = photo ?? [];

  const cityImageData = cityPhotos[getRandomInt(cityPhotos.length)] ?? {};

  const { server, id, secret, title } = cityImageData;

  const url = `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`;

  return { url, title };
}

export default getCityImage;
