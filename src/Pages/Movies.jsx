import React, { useEffect, useState } from 'react';

import { fetchMovieByQuery } from 'Services/api';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { cutText } from '../Helpers/cutText';
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const queryValue = searchParams.get('query') || '';

  useEffect(() => {
    fetchMovieByQuery(queryValue).then(res => {
      setMovies(res.results);
    });
  }, [queryValue]);

  const handleOnChange = e => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    setSearchParams(query ? { query } : {});
  };

  const getFilteredData = () => {
    return movies?.filter(movie =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <MainWrapper>
      <input type="search" value={query} onChange={handleOnChange} />
      <button onClick={handleSearch}>Search</button>
      <HomeTitle>Filtered movie: {queryValue}</HomeTitle>
      <Container>
        {getFilteredData()?.map(movie => (
          <CardWrapper key={movie.id}>
            <Link state={{ from: location }} to={`/movies/${movie.id}`}>
              <img
                width={200}
                height={350}
                src={
                  movie?.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie?.poster_path}`
                    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQju-zj4n6hRiWsnJfgNALcjvXBuMuUtPQP7FIskz9LhOnrogjzZSdSbkirqmngfDeMHd4&usqp=CAU'
                }
                alt={movie.original_title ?? movie.title ?? movie.name}
              />
              <ProductName>
                {cutText(movie.original_title ?? movie.title ?? movie.name)}
              </ProductName>
            </Link>
          </CardWrapper>
        ))}
      </Container>
    </MainWrapper>
  );
};

export default Movies;

export const ProductName = styled.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 16px;
`;

const CardWrapper = styled.div`
  border-radius: 20px;
  overflow: hidden;

  > a {
    text-decoration: none;
  }
`;

const MainWrapper = styled.main`
  grid-area: main;

  display: grid;
  align-items: center;

  padding: 10px 20px;
  color: #fff;

  background-position: center;
  background-size: cover;
  font-size: 1rem;
`;
const HomeTitle = styled.h2`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
`;
