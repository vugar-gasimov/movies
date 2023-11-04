import { fetchMovieById } from 'Services/api';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';

import Loader from 'Loader/Loader';
import {
  Container,
  LinkStyled,
  Links,
  MovieDetail,
  MovieDetails,
  MovieImage,
  NavLinkStyled,
  Text,
} from './MovieDetailsStyled';
import { ArrowLeft } from 'lucide-react';

const MoviesDetails = () => {
  const [movie, setMovie] = useState(null);
  const [, setError] = useState('');
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

  if (!movie || movie.length === 0) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  return (
    <Container $backdrop={movie.backdrop_path}>
      <LinkStyled to={goBackRef.current}>
        <ArrowLeft size={28} strokeWidth={2.5} />
      </LinkStyled>

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
