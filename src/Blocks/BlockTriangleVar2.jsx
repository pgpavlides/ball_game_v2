import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

export function BlockTriangleVar2({
  position = [0, 0, 0],
  geometryTriangle,
  geometry,
  floorMaterial,
  obstacleMaterial,
}) {
  const obstacle = useRef();
  const coneGeometry = new THREE.ConeGeometry(2.5, 2.5, 10);

  const [timeOffset] = useState(() => Math.random() * Math.PI * 2);
  /**
   * (Math.random() returns a number between 0 and 1)
   */
  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    const x = Math.sin((time + timeOffset) * 4);
    const z = Math.cos(time + timeOffset);
    if (obstacle.current) {
      obstacle.current.setNextKinematicTranslation({
        x: position[0] + x,
        y: position[1] + z,
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
            geometry={coneGeometry}
            material={obstacleMaterial}
            scale={[0.4, 0.4, 0.4]}
            position={[0, 0.65, 0]}
            castShadow
            receiveShadow
          ></mesh>
        </RigidBody>
      </group>
    </>
  );
}
