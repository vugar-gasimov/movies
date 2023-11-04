import { fetchMovies } from 'Services/api';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useHttp } from '../Hooks/useHttp';

import { cutText } from '../Helpers/cutText';

import {
  CardWrapper,
  Container,
  HomeTitle,
  MainWrapper,
  ProductName,
} from './HomeStyled';
import Loader from 'Loader/Loader';

const Home = () => {
  const [movies] = useHttp(fetchMovies);
  const location = useLocation();

  return (
    <MainWrapper>
      <HomeTitle>Welcome</HomeTitle>
      <HomeTitle>Today's trendings</HomeTitle>
      <Container>
        {movies &&
          movies?.map(movie => (
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

export default Home;
