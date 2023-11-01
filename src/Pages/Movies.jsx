import React, { useEffect, useState } from 'react';

import { fetchMovies } from 'api';

const Movies = () => {
  // const movies = getMovies();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMovies().then(data => setMovies(data));
  }, []);
  return (
    <div>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}> {movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
