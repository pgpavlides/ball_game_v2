import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

export function BlockAxe({
  position = [0, 0, 0],
  geometry,
  floorMaterial,
  obstacleMaterial,
}) {
  const obstacle = useRef();
  const [timeOffset] = useState(() => Math.random() * Math.PI * 2);
  /**
   * (Math.random() returns a number between 0 and 1)
   */
  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    const x = Math.sin((time * 2) + timeOffset) * 1.25;
    if (obstacle.current) {
    obstacle.current.setNextKinematicTranslation({
      x: position[0] + x,
      y: position[1] + 0.75,
      z: position[2],
    });
  }
  });

  return (
    <>
      <group position={position}>
        <mesh
          geometry={geometry}
          material={floorMaterial}
          position={[0, -0.1, 0]}
          scale={[4, 0.2, 4]}
          receiveShadow
        ></mesh>

        <RigidBody
          ref={obstacle}
          type="kinematicPosition"
          restitution={0.2}
          friction={0}
        >
          <mesh
            geometry={geometry}
            material={obstacleMaterial}
            scale={[1.5, 1.5, 0.3]}
            castShadow
            receiveShadow
          ></mesh>
        </RigidBody>
      </group>
    </>
  );
}
