import { useEffect, useRef, useState } from 'react';

import { Map as OlMap, useGeographic, View } from '../lib/openlayers';
import { type MapLayer, type ViewOptions } from '../types/openlayers';

export type UseMapProps = {
  layer: MapLayer;
  view?: ViewOptions;
};

export const useMap = ({ layer, view }: UseMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  const [map, setMap] = useState<OlMap>();

  useEffect(() => {
    //? This is not a react hook, this is from openlayers, safe to ignore
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useGeographic();

    const olMap = new OlMap({
      layers: layer.layer,
      view: new View({
        center: [0, 0],
        zoom: 0,
        ...view,
      }),
    });
    olMap.setTarget(mapRef.current ?? '');
    setMap(olMap);

    return () => olMap.setTarget('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (map) {
      map.setLayers(layer.layer);
    }
  }, [map, layer]);

  return { mapRef, map, setMap };
};
