import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import { KeyboardControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import "./index.scss";
import { Leva } from "leva";
import Interface from "./interfaces/Interface.jsx";
import { Menu } from "./interfaces/Menu.jsx";
import { Level } from "./Level.jsx";
import { LevelSelector } from "./interfaces/LevelSelector.jsx";
import styles from "./interfaces/LevelSelector.module.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/level-selector" element={<LevelSelector />} />
      <Route
        path="/level"
        element={
          <>
            <Link to="/level-selector">
              <div className={styles.backbuttonlevelselector}>
                <svg
                  fill="#000000"
                  height="200px"
                  width="200px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 490 490"
                >
                  <g>
                    <g>
                      <polygon points="332.668,490 82.631,244.996 332.668,0 407.369,76.493 235.402,244.996 407.369,413.507 		" />
                    </g>
                  </g>
                </svg>
              </div>
            </Link>
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
              <Canvas camera={{ fov: 75, position: [5, 10, 10] }}>
                <Experience />
              </Canvas>
              {/* <Interface /> */}
              <Leva collapsed />
            </KeyboardControls>
          </>
        }
      />
    </Routes>
  </Router>
);
