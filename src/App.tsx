import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei"
import { PhysicsExample } from "./examples/Physics";
import { Geometry } from "./examples/Geometry";
import { AssetModel } from "./examples/AssetModel";
import { HtmlCube } from "./examples/HtmlCube";
import { Textures } from "./examples/Textures";


function App() {
  return (
    <Canvas shadows dpr={[1, 2]} gl={{ alpha: false }} camera={{ position: [15, 15, 15], fov: 45 }}>
      <color attach="background" args={['#95a5a6']} />

      <directionalLight
        position={[3.3, 1.0, 4.4]}
        castShadow
        intensity={1.5}
      />

      <Geometry />
      {/* <HtmlCube />
      <AssetModel />
      <Textures />
      <PhysicsExample /> */}

      <OrbitControls target={[0, 1, 0]} />
      <axesHelper args={[5]} />
      <Stats />
    </Canvas>
  )
}

export default App;