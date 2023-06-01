import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, largeImageURL, tags, openModal }) => {
  return (
    <li className={css.item}>
      <img
        className={css.image}
        src={webformatURL}
        data-large={largeImageURL}
        alt={tags}
        onClick={event => {
          openModal(event.target.dataset.large);
        }}
      />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
