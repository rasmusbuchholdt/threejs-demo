import { useGLTF } from "@react-three/drei"

export const AssetModel = () => {
  const gltf = useGLTF('./suzanne/Suzanne.gltf');

  return (
    <>
      <primitive
        object={gltf.scene}
        position={[0, 1, 0]}
        children-0-castShadow
      />
    </>
  )
}