import { useEffect, useState } from 'react';

export const useHttp = (fn, params) => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    fn(params)
      .then(movies => setMovies(movies.results))
      .catch(error => setError(error.message));
  }, [params, fn]);
  return [movies, setMovies, { error }];
};
//useEffect(() => {
//   fetchMovies()
//     .then(data => setMovies(data.results))
//     .catch(error => setError(error.message));
// }, []);
