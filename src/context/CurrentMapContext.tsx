import { createContext } from 'react';

import { type Map } from '../lib/openlayers';

export type CurrentMapContextValue = { map?: Map };
export const CurrentMapContext = createContext<CurrentMapContextValue>({ map: undefined });
