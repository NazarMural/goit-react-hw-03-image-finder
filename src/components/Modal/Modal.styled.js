import styled from '@emotion/styled';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
`;

const Img = styled.img`
  backdrop-filter: blur(10px);
  position: relative;
  object-fit: cover;
`;

export { ModalWrapper, ModalBackdrop, Img };
