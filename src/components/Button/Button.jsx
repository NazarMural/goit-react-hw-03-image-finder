import React from 'react';
import PropTypes from 'prop-types';
import { ButtonBox, ButtonStyled } from './Button.styled';

const Button = ({ fetchMoreImages }) => {
  return (
    <ButtonBox>
      <ButtonStyled type="button" onClick={fetchMoreImages}>
        Load more
      </ButtonStyled>
    </ButtonBox>
  );
};

export default Button;

Button.propTypes = {
  fetchMoreImages: PropTypes.func.isRequired,
};
