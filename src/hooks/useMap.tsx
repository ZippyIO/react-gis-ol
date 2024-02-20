import { useContext } from 'react';

import { CurrentMapContext } from '../context/CurrentMapContext';
import { MapContext } from '../context/MapContext';

export const useMap = () => {
  const map = useContext(MapContext)?.map;
  const currentMap = useContext(CurrentMapContext)?.map;

  return { map: map, current: currentMap };
};
