import {render, screen} from '@testing-library/react';
import HostOffer from './host-offer';

describe('Component: HostOffer', () => {
  it('should render correct', () => {
    const host = {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false
    };
    const description = 'description';
    const expectedText = /Meet the host/i;

    render(<HostOffer host={host} description={description} />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
