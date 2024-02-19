import { type Meta, type StoryObj } from '@storybook/react';

import { MapLayerOSM } from '../lib/map-layers';
import Map from './Map';

const meta = {
  title: 'Map/Map',
  component: Map,
  parameters: {
    docs: {
      controls: { sort: 'requiredFirst' },
    },
  },
  tags: ['autodocs'],
  args: {
    layer: MapLayerOSM,
    view: {
      center: [0, 0],
      zoom: 4,
    },
    wrapperDivProps: { style: { height: '600px' } },
  },
} satisfies Meta<typeof Map>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {};
