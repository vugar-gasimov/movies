import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const api_key = '3d5790bdd3fdeefaeb5478f646385f38';

export const fetchMovies = async params => {
  const { data } = await axios.get('trending/all/day', {
    params: { ...params, api_key: api_key },
  });
  return data;
};

export const fetchMovieById = async id => {
  const { data } = await axios.get(`movie/${id}`, {
    params: { api_key: api_key },
  });
  return data;
};

// export const fetchMovieDetailsById = async id => {
//   const { data } = await axios.get(`movie/${id}`, {
//     params: { api_key: api_key },
//   });
//   return data;
// };
// export const fetchMovieCreditsById = async id => {
//   const { data } = await axios.get(`movie/${id}`, {
//     params: { api_key: api_key },
//   });
//   return data;
// };
// export const fetchMovieReviewsById = async id => {
//   const { data } = await axios.get(`movie/${id}`, {
//     params: { api_key: api_key },
//   });
//   return data;
// };

export const fetchMovieByQuery = async (query, params) => {
  const { data } = await axios.get(`search/movie`, {
    params: { query, ...params, api_key: api_key },
  });
  return data;
};
