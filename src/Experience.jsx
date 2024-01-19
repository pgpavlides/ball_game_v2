import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Lights from "./Lights.jsx";
import { Level } from "./Level.jsx";
import { Physics } from "@react-three/rapier";
import Player from "./Player.jsx";
import { Link } from "react-router-dom";
import styles from "./interfaces/LevelSelector.module.scss";

export default function Experience() {
  return (
    <>
      
      <OrbitControls makeDefault />

      <Physics debug={false}>
        <Lights />
        <Level />
        <Player />
      </Physics>
    </>
  );
}
