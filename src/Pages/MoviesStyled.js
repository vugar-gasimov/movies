import styled from 'styled-components';

export const ProductName = styled.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
`;

export const Container = styled.div`
  display: flex;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CardWrapper = styled.div`
  border-radius: 20px;
  overflow: hidden;

  > a {
    text-decoration: none;
  }
`;

export const MainWrapper = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  color: #fff;
  background-position: center;
  background-size: cover;
  font-size: 1rem;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
`;
export const HomeTitle = styled.h2`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
`;

// =================================

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  background: #10101058;
  border-radius: 50px;
  overflow: hidden;
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background: transparent;
  background-size: 40%;

  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export const SearchFormInput = styled.input`
  background: transparent;
  margin-left: 10px;
  display: inline-block;
  max-width: 400px;

  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  border-radius: 50px;
`;
