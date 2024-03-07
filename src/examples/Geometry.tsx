import { Box, Sphere, Cylinder, Cone, Torus, OrbitControls, Plane } from "@react-three/drei";
import { Canvas, extend } from "@react-three/fiber";
import { MeshStandardMaterial } from "three";
import { degressToRadians } from "../utils";

extend({ MeshStandardMaterial });

export const Geometry = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <pointLight position={[-10, -10, -5]} />

      <Box position={[-4, 0, 0]} args={[1, 1, 1]}>
        <meshStandardMaterial attach="material" color="royalblue" />
      </Box>

      <Sphere position={[-2, 0, 0]} args={[0.5, 32, 32]}>
        <meshStandardMaterial attach="material" color="hotpink" />
      </Sphere>

      <Cylinder position={[0, 0, 0]} args={[0.5, 0.5, 1, 32]}>
        <meshStandardMaterial attach="material" color="lightgreen" />
      </Cylinder>

      <Cone position={[2, 0, 0]} args={[0.5, 1, 32]}>
        <meshStandardMaterial attach="material" color="gold" />
      </Cone>

      <Torus position={[4, 0, 0]} args={[0.5, 0.2, 16, 100]}>
        <meshStandardMaterial attach="material" color="deepskyblue" />
      </Torus>

      {/* <Plane rotation={[degressToRadians(90), 0, 0]} position={[0, -0.5, 0]} args={[100, 100]} receiveShadow>
        <meshStandardMaterial side={2} attach="material" color="white" />
      </Plane> */}
    </>
  );
}
