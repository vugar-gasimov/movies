import React, { useEffect, useState } from 'react';

import { fetchMovies } from 'api';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  // const movies = getMovies();
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') ?? '';
  const title = searchParams.get('title') ?? '';
  const query = searchParams.get('query') ?? '';

  const handleChangeParams = e => {
    const value = e.target.value;
    setSearchParams(value ? { title: value, page: 1, query: true } : {});
  };

  const getFilteredData = e => {
    return movies?.filter(movie =>
      movie.title.toLowerCase().includes(title.toLowerCase())
    );
  };

  return (
    <div>
      <input type="search" value={title} onChange={handleChangeParams} />
      <button>Search</button>
      <h2>Filtered movie: {title}</h2>
      <ul>
        {getFilteredData()?.map(movie => {
          <li key={movie.id}>
            <Link state={{ from: location }} to={movie.id.toString()}>
              {movie.title} {movie.original_title}
            </Link>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default Movies;
