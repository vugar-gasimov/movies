import { fetchMovies } from 'api';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useHttp } from '../Hooks/useHttp';
import styled from 'styled-components';
import { cutText } from '../Helpers/cutText';
const Home = () => {
  const [movies, setMovies] = useHttp(fetchMovies);
  const location = useLocation();
  const [error, setError] = useState('');

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

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 16px;
`;

export const CardWrapper = styled.div`
  border-radius: 20px;
  overflow: hidden;

  > a {
    text-decoration: none;
  }
`;

export const ProductName = styled.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
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
