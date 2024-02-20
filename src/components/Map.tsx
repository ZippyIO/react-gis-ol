'use client';

import 'ol/ol.css';
import '../styles/map.css';

import { useContext, useEffect, useRef, useState } from 'react';

import { CurrentMapContext } from '../context/CurrentMapContext';
import { MapContext } from '../context/MapContext';
import { Map as OlMap, useGeographic as olGeographic, View } from '../lib/openlayers';
import { type MapLayer, type ViewOptions } from '../types/openlayers';

export type MapProps = {
  layer: MapLayer;
  view?: ViewOptions;
  wrapperDivProps?: React.ComponentProps<'div'>;
  children?: React.ReactNode;
};

const Map = ({ layer, view, wrapperDivProps, children }: MapProps) => {
  const mapContext = useContext(MapContext);
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<OlMap>();

  useEffect(() => {
    olGeographic();
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
    mapContext?.setMap(olMap);

    return () => {
      olMap.setTarget('');
      setMap(undefined);
      mapContext?.setMap(undefined);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (map) {
      map.setLayers(layer.layer);
    }
  }, [map, layer]);

  return (
    <div ref={mapRef} className="gis-ol-map" {...wrapperDivProps}>
      <CurrentMapContext.Provider value={{ map }}>{children}</CurrentMapContext.Provider>
    </div>
  );
};

export default Map;
