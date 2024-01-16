import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function BlockEnd({ position = [0, 0, 0], geometry, material }) {
  const hamburger = useGLTF("/hamburger.glb");

  hamburger.scene.children.forEach((mesh) => {
    mesh.castShadow = true;
    mesh.receiveShadow = true;
  });

  return (
    <>
      <group position={position}>
        <mesh
          geometry={geometry}
          material={material}
          position={[0, 0, 0]}
          scale={[4, 0.2, 4]}
          receiveShadow
        ></mesh>
        <RigidBody
          type="fixed"
          colliders="hull"
          position={[0, 0.25, 0]}
          restitution={0.2}
          friction={0}
        >
          <primitive object={hamburger.scene} scale={[0.2, 0.2, 0.2]} />
        </RigidBody>
      </group>
    </>
  );
}
