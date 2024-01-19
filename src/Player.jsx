import { useState, useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RigidBody, useRapier } from "@react-three/rapier";
import { useKeyboardControls } from "@react-three/drei";
import * as THREE from "three";

/**
 * useKeyboardControls:
 * This hook will return an array of 2 things:
 * 1. A function to subscribe to key changes ( usefull to know when the jump key has been pressed)
 * 2. A function to get the current states of the keys ( usefull to know if the WASD keys are beeing pressed)
 * @returns
 */

export default function Player() {
  const body = useRef();
  const [subscribeKeys, getKeys] = useKeyboardControls();
  const { rapier, world } = useRapier();

  // const [smoothedCameraPosition] = useState(new THREE.Vector3(10,10,10));
  // const [smoothedCameraTarget] = useState(new THREE.Vector3());

  const jump = () => {
    const origin = body.current.translation();
    origin.y -= 0.31;
    const direction = { x: 0, y: -1, z: 0 };
    const ray = new rapier.Ray(origin, direction);
    const hit = world.castRay(ray, 10, true);

    if (hit.toi < 0.15) {
      body.current.applyImpulse({ x: 0, y: 0.5, z: 0 });
    }
  };

  useEffect(() => {
    const unsubscribeJump = subscribeKeys(
      // the first is the selector, i want to listen to a key.

      (state) => {
        return state.jump;
      },

      // the second is the callback, i want to do something when the key is pressed.
      (value) => {
        if (value) {
          jump();
        }
      }
    );

    //This is a clean up. The the component is destroyed this part will be called

    return () => {
      unsubscribeJump();
    };
  }, []);

  useFrame((state, delta) => {
    const { forward, backward, leftward, rightward, jump } = getKeys();

    const impulse = { x: 0, y: 0, z: 0 };
    const torque = { x: 0, y: 0, z: 0 };

    const impulseStrength = 0.6 * delta;
    const torqueStrength = 0.2 * delta;

    // console.log(state);

    if (forward) {
      impulse.z -= impulseStrength;
      torque.x -= torqueStrength;
    }
    if (backward) {
      impulse.z += impulseStrength;
      torque.x += torqueStrength;
    }
    if (rightward) {
      impulse.x += impulseStrength;
      torque.z -= torqueStrength;
    }

    if (leftward) {
      impulse.x -= impulseStrength;
      torque.z += torqueStrength;
    }

    // console.log("Impulse:", impulse);
    // console.log("Torque:", torque);
    body.current.applyImpulse(impulse);
    body.current.applyTorqueImpulse(torque);

    /**
     * Camera
     */

    const bodyPosition = body.current.translation();

    const cameraPosition = new THREE.Vector3();
    cameraPosition.copy(bodyPosition);
    cameraPosition.z += 2;
    cameraPosition.y += 1.3;

    const cameraTarget = new THREE.Vector3();
    cameraTarget.copy(bodyPosition);
    cameraTarget.y += 0.25;

    // smoothedCameraPosition.lerp(cameraPosition, 5 * delta);
    // smoothedCameraTarget.lerp(cameraTarget, 5 * delta);

    state.camera.position.copy(cameraPosition);
    state.camera.lookAt(cameraTarget);
  });

  return (
    <RigidBody
      ref={body}
      canSleep={false}
      colliders="ball"
      restitution={0.2}
      friction={1}
      linearDamping={0.5}
      angularDamping={0.5}
      position={[0, 1, 0]}
    >
      <mesh castShadow>
        <icosahedronGeometry args={[0.3, 1]} />
        <meshStandardMaterial flatShading color="mediumpurple" />
      </mesh>
    </RigidBody>
  );
}
