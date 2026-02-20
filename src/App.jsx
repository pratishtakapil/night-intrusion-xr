import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect } from "react";
import gameManager from "./core/GameManager";

export default function App() {

  useEffect(() => {

    // Start the game when app loads
    gameManager.startGame();

    console.log("Game initialized");

  }, []);


  return (
    <Canvas
      style={{ width: "100vw", height: "100vh", background: "#0a0a0a" }}
      camera={{ position: [0, 2, 6], fov: 75 }}
    >

      {/* Lights */}
      <ambientLight intensity={0.4} />
      <pointLight position={[2, 4, 2]} intensity={1} />


      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#222" />
      </mesh>



      {/* RED CUBE — WRONG CHOICE */}
      <mesh
        position={[0, 0, 0]}
        onClick={() => {

          console.log("Clicked phishing link (WRONG)");

          gameManager.submitChoice(false);

        }}
      >
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="red" />
      </mesh>



      {/* GREEN CUBE — CORRECT CHOICE */}
      <mesh
        position={[4, 0, 0]}
        onClick={() => {

          console.log("Activated firewall (CORRECT)");

          gameManager.submitChoice(true);

        }}
      >
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="green" />
      </mesh>



      <OrbitControls />

    </Canvas>
  );

}