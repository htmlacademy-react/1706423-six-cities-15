import GalleryImage from '../gallery-image/gallery-image';

const Gallery = ({images}: {images: string[]}): JSX.Element => (
  <div className="offer__gallery-container container">
    <div className="offer__gallery">
      {images.map((image) => (
        <GalleryImage key={image} image={image} />
      ))}
    </div>
  </div>
);

export default Gallery;
