import React from 'react';
import styled from 'styled-components';

const Main = ({ children }) => {
  return <MainWrapper> Your Main content </MainWrapper>;
};

export default Main;

const MainWrapper = styled.nav`
  grid-area: main;
  /* display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  color: #fff;
  margin-top: 4rem;
  padding-top: 13rem;
  background: url('../images/footer.webp') no-repeat rgba(16, 16, 16, 0.33);
  background-position: center;
  background-size: cover;
  font-size: 1rem; */
`;
