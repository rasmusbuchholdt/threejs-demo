import { Box, Sphere, Cylinder, Cone, Torus, OrbitControls } from "@react-three/drei";
import { Canvas, extend } from "@react-three/fiber";
import { MeshStandardMaterial } from "three";

extend({ MeshStandardMaterial });

export const Geometry = () => {
  return (
    <Canvas camera={{ position: [2, 2, 10], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <pointLight position={[-10, -10, -5]} />
      
      {/* Box */}
      <Box position={[-4, 0, 0]} args={[1, 1, 1]}>
        <meshStandardMaterial attach="material" color="royalblue" />
      </Box>
      
      {/* Sphere */}
      <Sphere position={[-2, 0, 0]} args={[0.5, 32, 32]}>
        <meshStandardMaterial attach="material" color="hotpink" />
      </Sphere>
      
      {/* Cylinder */}
      <Cylinder position={[0, 0, 0]} args={[0.5, 0.5, 1, 32]}>
        <meshStandardMaterial attach="material" color="lightgreen" />
      </Cylinder>
      
      {/* Cone */}
      <Cone position={[2, 0, 0]} args={[0.5, 1, 32]}>
        <meshStandardMaterial attach="material" color="gold" />
      </Cone>
      
      {/* Torus */}
      <Torus position={[4, 0, 0]} args={[0.5, 0.2, 16, 100]}>
        <meshStandardMaterial attach="material" color="deepskyblue" />
      </Torus>

      <OrbitControls makeDefault />
    </Canvas>
  );
}
