import React, { Suspense, useContext } from 'react';
import styled from 'styled-components';
import { Route, Routes, Navigate } from 'react-router-dom';
import About from '../Pages/About';
import NotFound from '../Pages/NotFound';
import Layout from './Layout';
import { lazy } from 'react';
import { UserContext } from 'Context/UserProvider';
import Register from './Register';
import Loader from 'Loader/Loader';

const Home = lazy(() => import('../Pages/Home'));
const Movies = lazy(() => import('../Pages/Movies'));
const MoviesDetails = lazy(() => import('../Pages/MoviesDetails'));
const MovieCast = lazy(() => import('./MovieCast'));
const MovieReviews = lazy(() => import('./MovieReviews'));

const App = () => {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <StyledDiv>
      {isLoggedIn ? (
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <Layout />
              </Suspense>
            }
          >
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="about" element={<About />} />
            <Route path="register" element={<Register />} />
            <Route path="movies/:id" element={<MoviesDetails />}>
              <Route path="cast" element={<MovieCast />} />
              <Route
                path="reviews"
                element={
                  <Suspense fallback={<Loader />}>
                    <MovieReviews />
                  </Suspense>
                }
              />
            </Route>
          </Route>

          <Route path="404" element={<NotFound />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="*" element={<Navigate to="/register" />} />
          <Route path="register" element={<Register />} />
        </Routes>
      )}
    </StyledDiv>
  );
};
export default App;
const StyledDiv = styled.div`
  min-width: fit-content;

  display: grid;
  grid:
    'header' auto
    'main' 1fr
    'footer' auto
    / 1fr;

  font-size: 20px;
  color: #010101;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  background: linear-gradient(
    315deg,
    rgba(255, 159, 14, 0.5),
    rgba(228, 64, 187, 0.5),
    rgba(101, 90, 220, 0.5),
    rgba(72, 140, 251, 0.5),
    rgba(72, 140, 251, 0.5),
    rgba(41, 219, 188, 0.5),
    rgba(221, 245, 5, 0.5)
  );
`;
