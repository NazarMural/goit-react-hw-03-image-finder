import styled from '@emotion/styled';

const Header = styled.header`
  display: flex;
  justify-content: center;
  background-color: blue;
  padding: 10px 0;
`;

const Button = styled.button`
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

const Input = styled.input`
  font-size: 20px;
  padding: 5px 10px;
  border-radius: 5px;
  border: 2px solid black;
`;

export { Header, Button, Input };
