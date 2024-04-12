import {memo} from 'react';
import GalleryImage from '../gallery-image/gallery-image';
import {MAX_OFFER_IMAGES} from '../../../const';

const Gallery = memo(({images}: {images: string[]}): JSX.Element => (
  <div className="offer__gallery-container container" data-testid="gallery">
    <div className="offer__gallery">
      {images.slice(0, MAX_OFFER_IMAGES).map((image) => (
        <GalleryImage key={image} image={image} />
      ))}
    </div>
  </div>
));

Gallery.displayName = 'Gallery';

export default Gallery;
