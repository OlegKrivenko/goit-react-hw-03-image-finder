import axios from 'axios';

const API_KEY = '25741253-e7e81d4e6d6388e3c07e8899b';
const BASE_URL = 'https://pixabay.com/api/';

const fetchData = async (searchQuery, page) => {
  const response = await axios.get(BASE_URL, {
    params: {
      q: searchQuery,
      page: page,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });

  // console.log(response);
  // console.log(response.data);
  return response.data;
};

export default fetchData;
