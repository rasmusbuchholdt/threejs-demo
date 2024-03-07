import { Physics, Triplet, useBox, usePlane, useSphere } from '@react-three/cannon';

// Even better example: https://sbedit.net/4bbca15d7e418cfa209ed2664030ef061fe23a97

export const PhysicsExample = () => {
  return (
    <Physics>
      {Array(10).fill(null).map((_, i) => (
        i % 2 === 0 ? <Cube key={i} position={[0, i * 2.5, 0]} /> : <Sphere key={i} position={[0, i * 2.5, 0]} />
      ))}
      <Plane />
    </Physics>
  )
}

const Plane = () => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], position: [0, -0.5, 0] }));
  return (
    <mesh ref={ref as any} receiveShadow>
      <planeGeometry args={[1000, 1000]} />
      <shadowMaterial color="#171717" transparent opacity={0.4} />
    </mesh>
  )
}

const Cube = ({ position }: { position: Triplet }) => {
  const [ref] = useBox(() => ({ mass: 1, position, rotation: [0.4, 0.2, 0.5] }))
  return (
    <mesh receiveShadow castShadow ref={ref as any}>
      <boxGeometry />
      <meshLambertMaterial color="hotpink" />
    </mesh>
  )
}

const Sphere = ({ position }: { position: Triplet }) => {
  const [ref] = useSphere(() => ({ mass: 10, position }))
  return (
    <mesh ref={ref as any} castShadow>
      <sphereGeometry args={[0.75]} />
      <meshNormalMaterial />
    </mesh>
  )
}