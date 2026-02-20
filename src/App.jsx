import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function App() {
  return (
    <Canvas
      style={{ width: "100vw", height: "100vh", background: "#0a0a0a" }}
      camera={{ position: [0, 2, 6], fov: 75 }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[2, 4, 2]} intensity={1} />

      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#222" />
      </mesh>

      {/* Main cube object */}
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="red" />
      </mesh>

      <OrbitControls />
    </Canvas>
  );
}