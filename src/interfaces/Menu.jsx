import React from "react";
import "./Menu.scss";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export function Menu(props) {
  return (
    <>
      <div className="container">
        <Canvas className="canvasmenu">
            <OrbitControls/>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[2, 32, 30]}  />
                <meshStandardMaterial color="orange" wireframe />
            </mesh>

        </Canvas>
        <div className="container__playbutton">PLAY</div>
        <div className="container__levelbutton">SETTINGS</div>
        <div className="container__changelog">CHANGELOG</div>
      </div>

      <div className="volumebutton">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="mdi-volume-high"
          viewBox="0 0 24 24"
        >
          <path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" />
        </svg>
      </div>
      <div className="volumeslider">?</div>
    </>
  );
}
