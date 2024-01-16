import React from "react";
import { CuboidCollider } from "@react-three/rapier";


export function BlockStart({ position = [0, 0, 0], geometry, material } ) {
  return (
    <>
      <group position={position}>
        <mesh
          geometry={geometry}
          material={material}
          position={[0, -0.1, 0]}
          scale={[4, 0.2, 4]}
          receiveShadow
        ></mesh>
        
      </group>
      <CuboidCollider
          args={[2, 0.1, 2]}
          position={[0, -0.1, 0]}
          restitution={0.2}
          friction={1}
        />
    </>
  );
}
