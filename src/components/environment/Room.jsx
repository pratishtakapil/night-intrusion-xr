import { OrbitControls } from "@react-three/drei";

export default function Room() {
  return (
    <>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <OrbitControls />
    </>
  );
}