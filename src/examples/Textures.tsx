import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

export const Textures = () => {
  // const texture = useLoader(TextureLoader, '/textures/texture-1.jpg');
  const texture = useLoader(TextureLoader, '/textures/texture-2.jpg');

  return (
    <mesh>
      <boxGeometry  args={[2, 2, 2]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  )
}
