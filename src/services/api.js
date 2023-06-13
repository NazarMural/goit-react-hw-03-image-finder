import axios from 'axios';

const BASE_URl = 'https://pixabay.com/api/';
const KEY = '35972928-442e66beac26395ab9a996585';
const searchParams = new URLSearchParams({
  key: KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 12,
});

axios.defaults.baseURL = BASE_URl;

const getImages = async (searchSubject, page) => {
  const response = await axios.get(
    `?${searchParams}&q=${searchSubject}&page=${page}`
  );
  return response.data;
};

const getPerPage = () => {
  return searchParams.get('per_page');
};

export { getImages, getPerPage };
