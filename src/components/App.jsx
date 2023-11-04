import React, { useContext } from 'react';
import styled from 'styled-components';
import { Route, Routes, Navigate } from 'react-router-dom';
// import Home from '../Pages/Home';
import About from '../Pages/About';
// import Movies from '../Pages/Movies';
// import MoviesDetails from '../Pages/MoviesDetails';
import NotFound from '../Pages/NotFound';
import Layout from './Layout';
// import MovieCast from './MovieCast';
// import MovieReviews from './MovieReviews';
import { lazy } from 'react';
import { UserContext } from 'Context/UserProvider';

import Register from './Register';
const Home = lazy(() => import('../Pages/Home'));
const Movies = lazy(() => import('../Pages/Movies'));
const MoviesDetails = lazy(() => import('../Pages/MoviesDetails'));
const MovieCast = lazy(() => import('./MovieCast'));
const MovieReviews = lazy(() => import('./MovieReviews'));

export const App = () => {
  const { isLoggedIn } = useContext(UserContext);
  return (
    <StyledDiv>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="about" element={<About />} />
          <Route path="register" element={<Register />} />
          <Route
            path="movies/:id"
            element={isLoggedIn ? <MoviesDetails /> : <Register />}
          >
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
        </Route>

        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 100%;
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

// const Header = styled.header`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   gap: 12px;
//   padding: 8px 0;
//   margin-bottom: 16px;
//   border-bottom: 1px solid black;

//   > nav {
//     display: flex;
//   }
// `;
// const Footer = styled.footer`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   gap: 12px;
//   padding: 8px 0;
//   margin-bottom: 16px;
//   border-bottom: 1px solid black;

//   > nav {
//     display: flex;
//   }
// `;
// const Logo = styled.p`
//   font-weight: 700;
//   margin: 0;
// `;

// const StyledLink = styled(NavLink)`
//   padding: 8px 16px;
//   border-radius: 4px;
//   text-decoration: none;

//   font-weight: 500;
//   color: #fdd03b;
//   border: 1px solid transparent;

//   &.active {
//     color: #212121;
//     background-color: #fdd03b;
//     border-color: #fdd348;
//   }

//   &:hover:not(.active) {
//     color: #fff;
//     background-color: #fdd03b;
//     border-color: transparent;
//   }
// `;
