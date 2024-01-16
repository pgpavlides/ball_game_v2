import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import { KeyboardControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import './index.css'
import { Leva } from "leva";

ReactDOM.createRoot(document.getElementById('root')).render(
  <>

    <KeyboardControls
    map={[
      { name: "forward", keys: ["KeyW", "ArrowUp"] },
      { name: "backward", keys: ["KeyS", "ArrowDown"] },
      { name: "leftward", keys: ["KeyA", "ArrowLeft"] },
      { name: "rightward", keys: ["KeyD", "ArrowRight"] },
      { name: "jump", keys: ["Space"] },
      { name: "crouch", keys: ["ShiftLeft"] },
      { name: "sprint", keys: ["ShiftRight"] },
      { name: "fly", keys: ["KeyF"] },
      { name: "reset", keys: ["KeyR"] },
    ]}
  >
    <Canvas shadows>
    
      <Perf position="top-left"/>
      <Experience />
    </Canvas>
    <Leva collapsed />
  </KeyboardControls>
  </>
 
)
