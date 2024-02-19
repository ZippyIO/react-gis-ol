'use client';

import 'ol/ol.css';
import '../styles/map.css';

import { useMap, type UseMapProps } from '../hooks/useMap';

export type MapProps = UseMapProps & {
  wrapperDivProps?: React.ComponentProps<'div'>;
};

const Map = ({ wrapperDivProps, ...props }: MapProps) => {
  const { mapRef } = useMap({ ...props });

  return <div ref={mapRef} className="gis-ol-map" {...wrapperDivProps}></div>;
};

export default Map;