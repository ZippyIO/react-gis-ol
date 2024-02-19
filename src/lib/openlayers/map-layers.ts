import { type MapLayer } from '../../types/openlayers';
import { OSM, TileLayer } from './';

export const MapLayerOSM: MapLayer = {
  id: 'openstreetmap',
  name: 'OpenStreetMap',
  layer: [new TileLayer({ source: new OSM() })],
};
