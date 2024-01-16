import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { RigidBody, CuboidCollider } from "@react-three/rapier";
import * as THREE from "three";

export function Bounds({
  widthLength = 1,
  heightLength = 1,

  geometry,
  wallMaterial,
}) {
  return (
    <>
      <RigidBody type="fixed" restitution={0.2} friction={0}>
      <mesh
        position={[widthLength + 2 - 1, 1, -1.85]}
        geometry={geometry}
        material={wallMaterial}
        scale={[widthLength * 2 - 2, 2, 0.3]}
        castShadow
      />
      <mesh
        position={[-(widthLength + 2) + 1, 1, -1.85]}
        geometry={geometry}
        material={wallMaterial}
        scale={[widthLength * 2 - 2, 2, 0.3]}
        castShadow
      />
      <mesh
        position={[(widthLength * 2), 1, -(heightLength * 2) - 2]}
        geometry={geometry}
        material={wallMaterial}
        scale={[0.3, 2, heightLength * 4]}
        castShadow
      />

      <mesh
        position={[-(widthLength * 2), 1, -(heightLength * 2) - 2]}
        geometry={geometry}
        material={wallMaterial}
        scale={[0.3, 2, heightLength * 4]}
        castShadow
      />
      <CuboidCollider
          args={[2, 0.01, 2 ]}
          position={[0, 0, -(heightLength * 2) - 2]}
          scale={[widthLength, 1, heightLength]}
          restitution={0.2}
          friction={1}
        />
      </RigidBody>
    </>
  );
}
