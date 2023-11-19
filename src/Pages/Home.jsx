import { fetchMovies } from 'Services/api';
import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useHttp } from '../Hooks/useHttp';
import { Clapperboard } from 'lucide-react';
import { cutText } from '../Helpers/cutText';

import {
  CardWrapper,
  Container,
  HomeTitle,
  MainWrapper,
  ProductName,
} from './HomeStyled';
import { UserContext } from 'Context/UserProvider';

const Home = () => {
  const { user } = useContext(UserContext);
  const [movies] = useHttp(fetchMovies);
  const location = useLocation();

  return (
    <MainWrapper>
      <HomeTitle>
        Welcome to Go
        <Clapperboard size={28} color="black" />
        Watch {user && user.name ? `, ${user.name}` : ''}
      </HomeTitle>
      <HomeTitle>Choose a movie from Today's trendings</HomeTitle>

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
