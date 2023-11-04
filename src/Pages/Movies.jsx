import React, { useEffect, useState } from 'react';

import { fetchMovieByQuery } from 'Services/api';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { cutText } from '../Helpers/cutText';
import { Search } from 'lucide-react';

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
      <HomeTitle>Filtered movie: {queryValue}</HomeTitle>
      <SearchForm>
        <SearchFormInput
          type="search"
          value={query}
          onChange={handleOnChange}
        />
        <SearchFormButton onClick={handleSearch}>
          <Search strokeWidth={2.75} size={24} color="black" />
        </SearchFormButton>
      </SearchForm>
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
  display: flex;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
`;

const CardWrapper = styled.div`
  border-radius: 20px;
  overflow: hidden;

  > a {
    text-decoration: none;
  }
`;

const MainWrapper = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  color: #fff;
  background-position: center;
  background-size: cover;
  font-size: 1rem;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
`;
const HomeTitle = styled.h2`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
`;

// =================================

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  background: #10101058;
  border-radius: 50px;
  overflow: hidden;
`;

// Styled component for SearchForm button
export const SearchFormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background: transparent;
  background-size: 40%;

  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

// Styled component for SearchForm input
export const SearchFormInput = styled.input`
  background: transparent;
  margin-left: 10px;
  display: inline-block;
  max-width: 400px;

  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  border-radius: 50px;
`;
