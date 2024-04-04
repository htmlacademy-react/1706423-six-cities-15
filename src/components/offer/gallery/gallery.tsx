import {memo} from 'react';
import GalleryImage from '../gallery-image/gallery-image';

const Gallery = memo(({images}: {images: string[]}): JSX.Element => (
  <div className="offer__gallery-container container">
    <div className="offer__gallery">
      {images.map((image) => (
        <GalleryImage key={image} image={image} />
      ))}
    </div>
  </div>
));

Gallery.displayName = 'Gallery';

export default Gallery;
