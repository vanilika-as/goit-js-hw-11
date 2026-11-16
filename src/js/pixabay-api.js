import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '58663151-967c67838ded9a5cdfdd8f934';

export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
}
