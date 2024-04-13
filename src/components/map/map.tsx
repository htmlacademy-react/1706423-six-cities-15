import {memo, useEffect, useRef} from 'react';
import leaflet, {LayerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {City, DataOffer, Offer} from '../../types';
import useMap from '../../hooks/use-map';
import {URL_MARKER_ACTIVE, URL_MARKER_DEFAULT} from '../../const';

type MapProps = {
  offers: [DataOffer, ...Offer[]] | Offer[];
  city: City;
  selectedOfferId: string | null;
  className: string;
}

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_ACTIVE,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

const Map = memo(({offers, city, selectedOfferId, className}: MapProps): JSX.Element => {
  const mapRef = useRef<HTMLElement | null>(null);
  const map = useMap(mapRef, city.location);
  const markerLayer = useRef<LayerGroup>(leaflet.layerGroup());

  useEffect(() => {
    if (map) {
      map.setView(
        {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        city.location.zoom,
      );
      markerLayer.current.addTo(map);
      markerLayer.current.clearLayers();

      offers.forEach(({id, location}) => {
        leaflet.marker({
          lat: location.latitude,
          lng: location.longitude,
        }, {
          icon: (selectedOfferId && id === selectedOfferId)
            ? currentCustomIcon
            : defaultCustomIcon
        }).addTo(markerLayer.current);
      });
    }
  }, [map, offers, selectedOfferId, city]);

  return (
    <section
      className={`${className}__map map`}
      ref={mapRef}
      data-testid="map"
    >

    </section>
  );
});

Map.displayName = 'Map';

export default Map;
