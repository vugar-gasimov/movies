import styled from 'styled-components';

export const Container = styled.div`
  gap: 16px;
  display: flex;

  gap: 16px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CardWrapper = styled.div`
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;

  > a {
    text-decoration: none;
  }
  &:hover {
    transform: scale(1.07);
    background-color: #0000004f;
    box-shadow: 0 0 5px black;
  }
`;

export const ProductName = styled.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
`;

export const MainWrapper = styled.main`
  grid-area: main;
  display: grid;
  align-items: center;

  padding: 10px 20px;
  color: #fff;

  background-position: center;
  background-size: cover;
  font-size: 1rem;
`;
export const HomeTitle = styled.h2`
  padding: 4px;
  margin-top: 8px;
  margin: 0 auto;
  color: black;
`;
