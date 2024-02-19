import Map from './components/Map';
import { MapLayerOSM } from './lib/openlayers/map-layers';

const App = () => {
  return (
    <main className="h-screen w-full">
      <h1>React GIS-OL - OpenLayers</h1>
      <div className="h-[800px] w-full">
        <Map
          layer={MapLayerOSM}
          view={{
            center: [149.069, -35.5],
            zoom: 10,
            minZoom: 0,
            maxZoom: 28,
          }}
        />
      </div>
    </main>
  );
};

export default App;
