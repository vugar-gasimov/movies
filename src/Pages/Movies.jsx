import React, { useEffect, useState } from 'react';

import { fetchMovies } from 'api';
import { Link, useLocation } from 'react-router-dom';

const Movies = () => {
  // const movies = getMovies();
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetchMovies().then(data => setMovies(data));
  }, []);
  return (
    <div>
      {movies.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link state={{ from: location }} to={`/movies/${movie?.id}`}>
                {movie.title} {movie.original_title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
