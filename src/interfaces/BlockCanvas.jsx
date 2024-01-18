import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { Physics } from "@react-three/rapier";
import * as THREE from "three";
import Lights from "../Lights";
import styles from "./LevelSelector.module.scss";


export function BlockCanvas({ item }) {
  return (
    <>
      <Canvas className={styles.blockCanvas} camera={{ fov: 75, position: [3.5, 3.5, 3.5] }}>
        <Physics debug={false}>
          <OrbitControls />
          <Lights />

          {item}
        </Physics>
      </Canvas>
    </>
  );
}
