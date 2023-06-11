import styled from '@emotion/styled';

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const ButtonStyled = styled.button`
  font-size: 20px;
  font-weight: 700;
  padding: 5px 10px;
  border-radius: 5px;
  border: 2px solid black;

  &:hover {
    color: white;
    background-color: black;
  }
`;

export { ButtonBox, ButtonStyled };
