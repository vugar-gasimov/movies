import { useEffect, useState } from 'react';

export const useHttp = (fn, params) => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    fn(params)
      .then(data => setMovies(data))
      .catch(error => setError(error.message));
  }, [params, fn]);
  return [movies, setMovies, { error }];
};
