const { REACT_APP_FLICK_API_URL, REACT_APP_FLICKR_API_KEY } = process.env;

async function getCityImage(lat, lon) {
  const params = new URLSearchParams();

  params.append('method', 'flickr.photos.search');
  params.append('api_key', REACT_APP_FLICKR_API_KEY);
  params.append('sort', 'interestingness-desc');
  params.append('content_type', 1);
  params.append('media', 'photos');
  params.append('lat', lat);
  params.append('lon', lon);
  params.append('is_getty', true);
  params.append('per_page', 1);
  params.append('format', 'json');
  params.append('nojsoncallback', 1);

  const {
    photos: { photo }
  } = await fetch(`${REACT_APP_FLICK_API_URL}?${params.toString()}`).then(response => response.json());

  const cityImageData = photo?.[0] ?? {};

  const { server, id, secret, title } = cityImageData;

  const url = `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`;

  return { url, title };
}

export default getCityImage;
