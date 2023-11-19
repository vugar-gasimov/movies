import styled from 'styled-components';
export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  gap: 15px;
  justify-content: space-around;
  flex-direction: row-reverse;
`;
export const StyledLoginForm = styled.form`
  font-size: calc((1vh + 1vw));
  border: 3px solid lightblue;
  background-image: linear-gradient(
    135deg,
    #f72585,
    #b5179e,
    #7209b7,
    #560bad,
    #480ca8,
    #3a0ca3,
    #3f37c9,
    #4361ee,
    #4895ef,
    #4cc9f0
  );
  box-shadow: 3px 4px 7px 3px lightgray;
  width: calc((10vh + 20vw) * 2.2);
  padding: 10px 15px;
  border-radius: 12px;
  max-width: 400px;
  max-height: 600px;
`;
export const StyledLabel = styled.label`
  display: flex;
  flex-direction: ${props => (props.$row ? 'row' : 'column')};
  font-weight: bold;
  color: white;
`;
export const StyledInput = styled.input`
  padding: 5px 10px;
  font-size: calc((1vh + 1vw) * 1.2);

  background-color: inherit;
  border: none;

  outline: none;
  border-bottom: 1px solid;
  &:invalid {
    background-color: red;
  }
`;
export const StyledButton = styled.button`
  background-color: transparent;
  border: 3px solid #b5179e;
  color: #b5179e;
  border-radius: 30px;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1);
    text-shadow: 0 0 5px white;
    box-shadow: 0 0 5px white;
  }
`;
export const StyledTitle = styled.h1`
  text-align: center;
  margin-bottom: 10px;
  color: white;
  text-decoration: underline;
`;
