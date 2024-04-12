import {render, screen} from '@testing-library/react';
import Gallery from './gallery';


describe('Component: Gallery', () => {
  it('should render correct', () => {
    const images = ['image1', 'image2'];
    const galleryTestId = 'gallery';

    render(<Gallery images={images} />,);
    const gallery = screen.getByTestId(galleryTestId);

    expect(gallery).toBeInTheDocument();
  });
});
