import React from 'react';
import PropTypes from 'prop-types';
import { Img, ModalBackdrop, ModalWrapper } from './Modal.styled';

const Modal = ({ largeImageURL, handleBackdropClick }) => {
  return (
    <ModalWrapper>
      <ModalBackdrop onClick={handleBackdropClick} />
      <Img src={largeImageURL} alt="" height="500px" width="800px" />
    </ModalWrapper>
  );
};

export default Modal;

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  handleBackdropClick: PropTypes.func.isRequired,
};
