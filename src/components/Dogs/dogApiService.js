import axios from 'axios';

axios.defaults.baseURL = 'https://api.thedogapi.com/v1';
axios.defaults.headers.common['x-api-key'] =
  'live_LsxyDbeFIMhLpJcM1Plvgdi56pDXrjnikuTLTfF0jymQi7b40wMjurtxziziUSRR';

export const fetchBreeds = async () => {
  const response = await axios.get('/breeds');
  return response.data;
};

export const fetchDogByBreed = async breedId => {
  const response = await axios.get('images/search', {
    params: {
      breed_id: breedId,
    },
  });
  return response.data[0];
};
