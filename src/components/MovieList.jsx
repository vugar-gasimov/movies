// import { Link } from 'react-router-dom';
// import { fetchMovieById } from '../api';
// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';

// export const MovieList = () => {
//   const [movies, setMovies] = useState([]);
//   const [error, setError] = useState('');
//   const { id } = useParams();
//   useEffect(() => {
//     fetchMovieById(id)
//       .then(response => {
//         setMovies(response);
//       })
//       .catch(error => {
//         navigate('/404');
//         setError(err.message);
//       });
//   }, [id, navigate]);

//   return (
//     <Container>
//       <Link to={goBackRef.current}>BACk</Link>
//       {movies.map(movie => (
//         <CardWrapper key={movie.id}>
//           <Link to={`${movie.id}`}>
//             <img src="https://via.placeholder.com/200x100" alt="" />
//             <ProductName>{movie.title}</ProductName>
//           </Link>
//         </CardWrapper>
//       ))}
//     </Container>
//   );
// };

// export const Container = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, 200px);
//   gap: 16px;
// `;

// export const CardWrapper = styled.div`
//   border: 1px solid black;
//   border-radius: 4px;

//   > a {
//     text-decoration: none;
//   }
// `;

// export const ProductName = styled.h3`
//   padding: 4px;
//   margin-top: 8px;
//   margin-bottom: 0;
//   color: black;
// `;
