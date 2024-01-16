import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

export function BlockDoubleDoor({
  position = [2, 0, 0],
  geometry,
  floorMaterial,
  obstacleMaterial,
}) {
  const obstacle = useRef();
  const obstacle2 = useRef();
  const [speed] = useState(
    () => (Math.random() + 0.2)
  );
  const [speed2] = useState(
    () => (Math.random() + 0.2) * (-1)
  );
  /**
   * (Math.random() returns a number between 0 and 1)
   */
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const rotation = new THREE.Quaternion();
    rotation.setFromEuler(new THREE.Euler(0, time * speed, 0));
    const rotation2 = new THREE.Quaternion();
    rotation2.setFromEuler(new THREE.Euler(0, time * speed2, 0));
    if (obstacle.current) {
    obstacle.current.setNextKinematicRotation(rotation);
    }
    if (obstacle2.current) {
    obstacle2.current.setNextKinematicRotation(rotation2);
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
          position={[1, 1.40, 0]}

          restitution={0.2}
          friction={0}
        >
          <mesh
            geometry={geometry}
            material={obstacleMaterial}
            scale={[1.5, 2.8, 0.3]}
            castShadow
            receiveShadow
          ></mesh>
        </RigidBody>
        <RigidBody
          ref={obstacle2}
          type="kinematicPosition"
          position={[-1, 1.40, 0]}

          restitution={0.2}
          friction={0}
        >
          <mesh
            geometry={geometry}
            material={obstacleMaterial}
            scale={[1.5, 2.8, 0.3]}
            castShadow
            receiveShadow
          ></mesh>
        </RigidBody>
      </group>
    </>
  );
}
