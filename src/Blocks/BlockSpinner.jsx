import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

export function BlockSpinner({
  position = [0, 0, 0],
  geometry,
  floorMaterial,
  obstacleMaterial,
}) {
  const obstacle = useRef();
  const [speed] = useState(
    () => (Math.random() + 0.2) * (Math.random() > 0.5 ? 1 : -1)
  );
  /**
   * (Math.random() returns a number between 0 and 1)
   */
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    // console.log(state)
    const rotation = new THREE.Quaternion();
    rotation.setFromEuler(new THREE.Euler(0, time * speed, 0));
    if (obstacle.current) {
    obstacle.current.setNextKinematicRotation(rotation);
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
            scale={[3.5, 0.3, 0.3]}
            position={[0, 0.3, 0]}
            castShadow
            receiveShadow
          ></mesh>
        </RigidBody>
      </group>
    </>
  );
}
