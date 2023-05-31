import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';

import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images, toggleOnLoading, openModal }) => {
  return (
    <ul className={css.gallery}>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          toggleOnLoading={toggleOnLoading}
          openModal={openModal}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  toggleOnLoading: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};
