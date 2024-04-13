import { memo } from 'react';

const GalleryImage = memo(({image}: {image: string}): JSX.Element => (
  <div className="offer__image-wrapper" data-testid="gallery-image">
    <img className="offer__image" src={image} alt="Photo studio" />
  </div>
));

GalleryImage.displayName = 'GalleryImage';

export default GalleryImage;
