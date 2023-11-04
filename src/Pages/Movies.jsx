import React, { useEffect, useState } from 'react';

import { fetchMovieByQuery } from 'Services/api';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import { cutText } from '../Helpers/cutText';
import { Search } from 'lucide-react';
import {
  CardWrapper,
  Container,
  HomeTitle,
  MainWrapper,
  ProductName,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './MoviesStyled';

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

  const handleSearch = e => {
    e.preventDefault();
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
