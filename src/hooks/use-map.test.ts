import {renderHook} from '@testing-library/react';
import useMap from './use-map';
import {CITIES_TABS} from '../const';

describe('Hook: useMap', () => {
  it('should return map element', () => {
    const mockCity = CITIES_TABS[0];
    const mockMapElement = {current: document.createElement('section')};

    const {result} = renderHook(() => useMap(mockMapElement, mockCity.location));
    const map = result.current;

    expect(typeof map).toBe('object');
  });
});
