import { createContext, useState } from 'react';

import { type Map } from '../lib/openlayers';
import { type SetState } from '../types/types';

export type MapContextValue = {
  map?: Map;
  setMap: SetState<Map | undefined>;
} | null;

export const MapContext = createContext<MapContextValue>(null);

export const MapProvider = ({ children }: { children: React.ReactNode }) => {
  const [map, setMap] = useState<Map>();

  return <MapContext.Provider value={{ map, setMap }}>{children}</MapContext.Provider>;
};
