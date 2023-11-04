import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BgImg from '../images/notFound.jpg';

const NotFound = () => {
  return (
    <Wrapper>
      <Content>
        <h1>Oops! Something went wrong</h1>
        <h2>
          You can go back <LinkStyled to="/"> Home </LinkStyled>
        </h2>
      </Content>
    </Wrapper>
  );
};

export default NotFound;

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${BgImg}) no-repeat center center;
  background-size: cover;
`;
const Content = styled.div`
  text-align: center;
  color: #fdd03b;
  background: #10101079;
  width: fit-content;
  border-radius: 10px;
  padding: 10px;
  height: fit-content;
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
