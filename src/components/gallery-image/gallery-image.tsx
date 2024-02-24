const GalleryImage = ({image}: {image: string}): JSX.Element => (
  <div className="offer__image-wrapper">
    <img className="offer__image" src={image} alt="Photo studio" />
  </div>
);

export default GalleryImage;
