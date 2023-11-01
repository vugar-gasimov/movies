import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const apiKey = '3d5790bdd3fdeefaeb5478f646385f38';

export const fetchMovies = async params => {
  const { data } = await axios.get('trending/all/day', {
    params: { ...params, apiKey },
  });
  return data;
};
