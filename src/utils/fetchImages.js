import axios from 'axios';

const fetch = async (q, page) => {
  const URL = 'https://pixabay.com/api/';
  const KEY = '37018650-559b86afe30fd9216457fcff9';
  const response = await axios.get(URL, {
    params: {
      key: KEY,
      q: `${q}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safeSearch: true,
      per_page: 12,
      page: `${page}`,
    },
  });
  return response.data;
};

const getPictures = { fetch };

export default getPictures;
