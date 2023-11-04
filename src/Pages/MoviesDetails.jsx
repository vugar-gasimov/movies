import { fetchMovieById } from 'Services/api';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import styled from 'styled-components';
import Loader from 'Loader/Loader';
import propTypes from 'prop-types';
const MoviesDetails = () => {
  //   const movie = fetchMovieById(id);
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');
  const location = useLocation();
  const goBackRef = useRef(location.state?.from || '/');
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetchMovieById(id)
      .then(response => {
        setMovie(response);
      })
      .catch(error => {
        navigate('/404');
        setError(error.message);
      });
  }, [id, navigate]);
  console.log(movie);

  if (!movie || movie.length === 0) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  return (
    <Container $backdrop={movie.backdrop_path}>
      <LinkStyled to={goBackRef.current}>BACK</LinkStyled>

      <MovieImage>
        <img
          width={500}
          height={650}
          src={
            movie?.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie?.poster_path}`
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQju-zj4n6hRiWsnJfgNALcjvXBuMuUtPQP7FIskz9LhOnrogjzZSdSbkirqmngfDeMHd4&usqp=CAU'
          }
          alt={movie.original_title ?? movie.title ?? movie.name}
        />
        <MovieDetails>
          <h2>
            {movie.original_title ?? movie.title ?? movie.name}
            <br />({movie?.release_date})
          </h2>
          <p>User score: {(movie.vote_average * 10).toFixed(2)}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <p>
            {movie.genres.map(genre => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </p>
        </MovieDetails>
      </MovieImage>

      <MovieDetail>
        <Text>Additional information:</Text>
        <Links>
          <NavLinkStyled to="cast"> Cast </NavLinkStyled>
          <NavLinkStyled to="reviews"> Reviews </NavLinkStyled>
        </Links>
      </MovieDetail>
      <br />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MoviesDetails;

export const CardWrapper = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  color: #fdd03b;
  > a {
    text-decoration: none;
  }
`;
export const MovieDetail = styled.div`
  margin: 0 auto;
  background: #10101058;
  width: fit-content;
  border-radius: 10px;
  padding: 10px;
  height: fit-content;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;

  &::after {
    content: '';
    position: fixed;
    top: 0px;
    left: -5px;
    width: calc(100% + 10px);
    height: calc(100vh + 10px);
    background-image: ${props =>
      props.$backdrop
        ? `url('https://image.tmdb.org/t/p/w500/${props.$backdrop}')`
        : 'none'};
    background-size: cover;

    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;

    z-index: -1;
    opacity: 0.35;
  }
`;

const MovieImage = styled.div`
  display: flex;
  justify-content: space-evenly;
  img {
    display: flex;
    width: 500px;
    height: 650px;

    border-radius: 5px;
  }
`;

const MovieDetails = styled.div`
  max-width: 500px;
  background: #10101058;
  border-radius: 10px;
  padding: 10px;
  height: fit-content;
  h2 {
    margin-bottom: 5px;
    color: #fdd03b;
  }

  p {
    margin: 5px 0;
    color: #fdd03b;
  }

  h3,
  h4 {
    margin: 10px 0 5px;
    color: #fdd03b;
  }

  span {
    margin-right: 10px;
    color: #fdd03b;
  }
`;

const LinkStyled = styled(Link)`
  width: fit-content;
  text-decoration: none;
  margin-left: 20px;
  border: 2px solid #cdcdcd;
  padding: 0.4rem 1.5rem;
  font-size: 1.2rem;
  border-radius: 2rem;
  cursor: pointer;
  display: inline-block;
  height: 3rem;
  color: #fdd03b;
  border: 1px solid transparent;
  background-color: #fdd03b;
  border-color: transparent;
  color: black;

  &:hover:not(.active) {
    color: #fff;
  }
`;

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  margin-left: 20px;
  border: 2px solid #cdcdcd;
  padding: 0.4rem 1.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 2rem;
  cursor: pointer;
  display: inline-block;
  height: 3rem;
  color: #fdd03b;
  border: 1px solid transparent;

  border-color: transparent;

  &.active {
    color: #212121;
    background-color: #fdd03b;
    font-weight: 500;
    border-color: #fdd348;
  }

  &:hover:not(.active) {
    color: black;
    background-color: #fdd03b;
    font-weight: 500;
    border-color: transparent;
  }
`;
const Links = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Text = styled.div`
  color: #fdd03b;
  display: flex;
  justify-content: center;
`;
