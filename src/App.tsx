import { Canvas } from "@react-three/fiber";
import { AssetModel } from "./examples/AssetModel";
import { Geometry } from "./examples/Geometry";
import { HtmlCube } from "./examples/HtmlCube";
import { OrbitControls, Stats } from "@react-three/drei"


function App() {
  return (
    <Canvas shadows>
      <color attach="background" args={['#95a5a6']} />

      <directionalLight
        position={[3.3, 1.0, 4.4]}
        castShadow
        intensity={Math.PI * 2}
      />

      <HtmlCube />
      {/* <AssetModel /> */}
      {/* <Geometry /> */}

      <OrbitControls target={[0, 1, 0]} />
      <axesHelper args={[5]} />
      <Stats />
    </Canvas>
  )
}

export default App;