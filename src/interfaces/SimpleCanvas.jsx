import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";

export function SimpleCanvas({ geometry, material,animdelay }) {

  const { scale } = useSpring({
    scale: [1, 1, 1], // End scale (1)
    from: { scale: [0, 0, 0] }, // Start scale (0)
    config: { tension: 100, friction: 20 },
    delay: animdelay // Animation config
  });

  return (
    <>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <animated.mesh
          geometry={geometry}
          material={material}
          position={[0, 0, 0]}
          scale={scale} 
          
        />
      </Canvas>
    </>
  );
}
