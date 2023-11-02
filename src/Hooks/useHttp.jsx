import { useEffect, useState } from 'react';

export const useHttp = (fn, param) => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    fn(param)
      .then(movies => setMovies(movies.results))
      .catch(error => setError(error.message));
  }, [param, fn]);
  return [movies, setMovies, { error }];
};
//useEffect(() => {
//   fetchMovies()
//     .then(data => setMovies(data.results))
//     .catch(error => setError(error.message));
// }, []);
