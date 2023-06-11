import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ images, changeModalForm }) => {
  return images.map(image => {
    return (
      <li key={image.id}>
        <img
          src={image.webformatURL}
          alt={image.tags}
          height="200px"
          width="300px"
          onClick={() => {
            changeModalForm(image.largeImageURL);
          }}
        />
      </li>
    );
  });
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  image: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  changeModalForm: PropTypes.func.isRequired,
};
