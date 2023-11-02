import { fetchMovieById } from 'api';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const MoviesDetails = () => {
  const { id } = useParams();
  //   const movie = fetchMovieById(id);
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');
  const location = useLocation();
  const goBackRef = useRef(location.state?.from || '/');
  const navigate = useNavigate();
  useEffect(() => {
    fetchMovieById(id)
      .then(data => setMovie(data))
      .catch(error => {
        navigate('/404');
        setError(error.message);
      });
  }, [id, navigate]);
  console.log(id);

  //   if (!movie) {
  //     return <div>Loading...</div>;
  //   }
  if (!movie || movie.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <Container>
      {/* <Link to={goBackRef.current}>BACk</Link> */}
      {Array.isArray(movie) &&
        movie.map(movie => (
          <CardWrapper key={movie.id}>
            <Link to={`${movie.id}`}>
              <img src="https://via.placeholder.com/200x100" alt="" />
              <ProductName>{movie.title}</ProductName>
            </Link>
          </CardWrapper>
        ))}
    </Container>
  );
};

export default MoviesDetails;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 16px;
`;
export const CardWrapper = styled.div`
  border: 1px solid black;
  border-radius: 4px;

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
