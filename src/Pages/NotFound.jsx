import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Wrapper>
      <div>
        <img src="../images/notFound.jpg" alt="404" />
        <h1>Oops! Something went wrong</h1>
        <h2>
          You can go back <Link to="/"> Home </Link>
        </h2>
      </div>
    </Wrapper>
  );
};

export default NotFound;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
