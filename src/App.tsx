import { OrbitControls, Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"
import { useState } from "react";

function App() {
  return (
    <Canvas camera={{ position: [2, 1, 5], fov: 25 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 5]} />
      <pointLight position={[-10, -10, -10]} />
      <Box />
      <OrbitControls makeDefault />
    </Canvas>
  )
}

const Box = () => {
  const [size, setSize] = useState(0.5)
  return (
    <mesh scale={size * 2}>
      <boxGeometry />
      <meshStandardMaterial />
      <Html occlude distanceFactor={1.5} position={[0, 0, 0.51]} transform>
        <p>1</p>
      </Html>
      <Html occlude distanceFactor={1.5} position={[0, 0, -0.51]} rotation={[0, degressToRadians(180), 0]} transform>
        <p>2</p>
      </Html>
      <Html occlude distanceFactor={1.5} position={[0, 0.51, 0]} rotation={[degressToRadians(90), degressToRadians(180), 0]} transform>
        <p onClick={() => setSize(3)}>3</p>
      </Html>
      <Html occlude distanceFactor={1.5} position={[0, -0.51, 0]} rotation={[degressToRadians(90), 0, 0]} transform>
        <p>4</p>
      </Html>
      <Html occlude distanceFactor={1.5} position={[0.51, 0, 0]} rotation={[0, degressToRadians(90), 0]} transform>
        <p>5</p>
      </Html>
      <Html occlude distanceFactor={1.5} position={[-0.51, 0, 0]} rotation={[0, degressToRadians(270), 0]} transform>
        <p>6</p>
      </Html>
    </mesh>
  )
};

const degressToRadians = (degrees: number) => {
  return degrees * (Math.PI / 180);
};

export default App;