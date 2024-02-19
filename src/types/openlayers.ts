import type BaseLayer from 'ol/layer/Base';
import { type MapOptions } from 'ol/Map';
import { type ViewOptions } from 'ol/View';

export type { BaseLayer, MapOptions, ViewOptions };

export type MapLayer = {
  id: string;
  name: string;
  layer: BaseLayer[];
};
