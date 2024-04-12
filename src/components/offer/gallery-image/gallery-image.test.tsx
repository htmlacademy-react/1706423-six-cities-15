import {render, screen} from '@testing-library/react';
import GalleryImage from './gallery-image';


describe('Component: GalleryImage', () => {
  it('should render correct', () => {
    const image = 'image';
    const galleryImageTestId = 'gallery-image';

    render(<GalleryImage image={image} />,);
    const galleryImage = screen.getByTestId(galleryImageTestId);

    expect(galleryImage).toBeInTheDocument();
  });
});
