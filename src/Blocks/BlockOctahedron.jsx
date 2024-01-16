import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

export function BlockOctahedron({
  position = [0, 0, 0],
  geometryTriangle,
  geometry,
  floorMaterial,
  obstacleMaterial,
}) {
  const obstacle = useRef();
  const verticesOfCube = [
    -1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1,
    -1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1,
  ];

  const indicesOfFaces = [
    2, 1, 0, 0, 3, 2,
    0, 4, 7, 7, 3, 0,
    0, 1, 5, 5, 4, 0,
    1, 2, 6, 6, 5, 1,
    2, 3, 7, 7, 6, 2,
    4, 5, 6, 6, 7, 4,
  ];

  const octahedronGeometry = new THREE.PolyhedronGeometry(
    verticesOfCube,
    indicesOfFaces,
    6,
    2
  );

  const [timeOffset] = useState(() => Math.random() * Math.PI * 2);
  const [speed] = useState(
    () => (Math.random() + 0.2) * (Math.random() > 0.5 ? 1 : -1)
  );

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    const x = Math.sin((time + timeOffset) * 4);
    const z = Math.cos(time + timeOffset);
    if (obstacle.current) {
    obstacle.current.setNextKinematicTranslation({
      x: position[0] + x,
      y: position[1] + 1,
      z: position[2] + z,
    });
  }
    const rotation = new THREE.Quaternion();
    rotation.setFromEuler(new THREE.Euler(0, time * speed * 3, 0));
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
          {[0.05, 0.06, 0.03].map((scale, index) => (
            <mesh
              key={index}
              geometry={octahedronGeometry}
              material={obstacleMaterial}
              scale={[scale, scale, scale]}
              position={[index - 1, 0.65, index === 0 ? 0 : 1 * (index % 2)]}
              castShadow
              receiveShadow
            ></mesh>
          ))}
        </RigidBody>
      </group>
    </>
  );
}
