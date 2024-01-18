import React, { useState } from "react";
import styles from "./LevelSelector.module.scss";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { SimpleCanvas } from "./SimpleCanvas";

import { BlockSpinner } from "../Blocks/BlockSpinner";
import { BlockSpinnerClock } from "../Blocks/BlockSpinnerClock";
import { BlockSpinnerBarrel } from "../Blocks/BlockSpinnerBarrel";
import { BlockPillarSpinner } from "../Blocks/BlockPillarSpinner";
import { BlockDoor } from "../Blocks/BlockDoor";
import { BlockDoubleDoor } from "../Blocks/BlockDoubleDoor";
import { BlockLimbo } from "../Blocks/BlockLimbo";
import { BlockRandomPillar } from "../Blocks/BlockRandomPillar";
import { BlockAxe } from "../Blocks/BlockAxe";
import { BlockTriangle } from "../Blocks/BlockTriangle";
import { BlockTriangleVar2 } from "../Blocks/BlockTriangleVar2";
import { BlockOctahedron } from "../Blocks/BlockOctahedron";

import * as THREE from "three";
import { useSpring, animated } from "@react-spring/three";

import { BlockCanvas } from "./BlockCanvas";

const sphere = new THREE.SphereGeometry(2, 32, 2);
const box = new THREE.BoxGeometry(2, 2, 2);
const torus = new THREE.TorusGeometry(2, 1, 16, 100);
const cone = new THREE.ConeGeometry(2, 4, 32);
const cylinder = new THREE.CylinderGeometry(2, 2, 4, 32);
const icosahedron = new THREE.IcosahedronGeometry(2, 0);
const octahedron = new THREE.OctahedronGeometry(2, 0);
const tetrahedron = new THREE.TetrahedronGeometry(2, 0);
const torusknot = new THREE.TorusKnotGeometry(2, 0.8, 64, 16);
const dodecahedron = new THREE.DodecahedronGeometry(2, 0);
const polyhedron = new THREE.PolyhedronGeometry(2, 0);
const ring = new THREE.RingGeometry(1, 5, 32);

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const floor1Material = new THREE.MeshStandardMaterial({ color: "limegreen" });
const floor2Material = new THREE.MeshStandardMaterial({ color: "greenyellow" });
const obstacleMaterial = new THREE.MeshStandardMaterial({ color: "red" });
const wallMaterial = new THREE.MeshStandardMaterial({ color: "slategrey" });

const material = new THREE.MeshPhongMaterial({
  color: "#ff0000",
  wireframe: true,
});
export function LevelSelector({ animdelay }) {
  const [isSwitchOn, setSwitchOn] = useState(false);
  const [isSwitchOn1, setSwitchOn1] = useState(false);
  const [isSwitchOn2, setSwitchOn2] = useState(false);
  const [isSwitchOn3, setSwitchOn3] = useState(false);
  const [isSwitchOn4, setSwitchOn4] = useState(false);
  const [isSwitchOn5, setSwitchOn5] = useState(false);
  const [isSwitchOn6, setSwitchOn6] = useState(false);
  const [isSwitchOn7, setSwitchOn7] = useState(false);
  const [isSwitchOn8, setSwitchOn8] = useState(false);
  const [isSwitchOn9, setSwitchOn9] = useState(false);
  const [isSwitchOn10, setSwitchOn10] = useState(false);
  const [isSwitchOn11, setSwitchOn11] = useState(false);

  const toggleSwitch = () => {
    setSwitchOn(!isSwitchOn);
  };
  const toggleSwitch1 = () => {
    setSwitchOn1(!isSwitchOn1);
  };
  const toggleSwitch2 = () => {
    setSwitchOn2(!isSwitchOn2);
  };
  const toggleSwitch3 = () => {
    setSwitchOn3(!isSwitchOn3);
  };
  const toggleSwitch4 = () => {
    setSwitchOn4(!isSwitchOn4);
  };
  const toggleSwitch5 = () => {
    setSwitchOn5(!isSwitchOn5);
  };
  const toggleSwitch6 = () => {
    setSwitchOn6(!isSwitchOn6);
  };
  const toggleSwitch7 = () => {
    setSwitchOn7(!isSwitchOn7);
  };
  const toggleSwitch8 = () => {
    setSwitchOn8(!isSwitchOn8);
  };
  const toggleSwitch9 = () => {
    setSwitchOn9(!isSwitchOn9);
  };
  const toggleSwitch10 = () => {
    setSwitchOn10(!isSwitchOn10);
  };
  const toggleSwitch11 = () => {
    setSwitchOn11(!isSwitchOn11);
  };
  const { scale } = useSpring({
    scale: [1, 1, 1], // End scale (1)
    from: { scale: [0, 0, 0] }, // Start scale (0)
    config: { tension: 100, friction: 20 },
    delay: animdelay, // Animation config
  });

  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftcontainer}>
          <h1 className={styles.titleTrapSelector}>Trap Selector</h1>
          <div className={styles.backbuttonlevelselector}>
            <svg
              fill="#000000"
              height="200px"
              width="200px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 490 490"
            >
              <g>
                <g>
                  <polygon points="332.668,490 82.631,244.996 332.668,0 407.369,76.493 235.402,244.996 407.369,413.507 		" />
                </g>
              </g>
            </svg>
          </div>

          <div className={styles.grid}>
            {/* Grid Cell 0 */}
            <div className={styles.gridItem}>
              <div className={styles.flexContainer}>
                <BlockCanvas
                  className={styles.blockCanvas}
                  item={
                    <BlockSpinner
                      geometry={boxGeometry}
                      floorMaterial={floor2Material}
                      obstacleMaterial={obstacleMaterial}
                    />
                  }
                />
                <button
                  className={`${styles.switchButton} ${
                    isSwitchOn ? styles.switchOn : styles.switchOff
                  }`}
                  onClick={toggleSwitch}
                >
                  {isSwitchOn ? "Enabled" : "Disabled"}
                </button>
              </div>
            </div>

            {/* Grid Cell 1 */}
            <div className={styles.gridItem}>
              <div className={styles.flexContainer}>
                <BlockCanvas
                  className={styles.blockCanvas}
                  item={
                    <BlockSpinnerClock
                      geometry={boxGeometry}
                      floorMaterial={floor2Material}
                      obstacleMaterial={obstacleMaterial}
                    />
                  }
                />

                <button
                  className={`${styles.switchButton} ${
                    isSwitchOn1 ? styles.switchOn : styles.switchOff
                  }`}
                  onClick={toggleSwitch1}
                >
                  {isSwitchOn1 ? "Enabled" : "Disabled"}
                </button>
              </div>
            </div>

            {/* Grid Cell 2 */}
            <div className={styles.gridItem}>
              <div className={styles.flexContainer}>
                <BlockCanvas
                  className={styles.blockCanvas}
                  item={
                    <BlockSpinnerBarrel
                      geometry={boxGeometry}
                      floorMaterial={floor2Material}
                      obstacleMaterial={obstacleMaterial}
                    />
                  }
                />

                <button
                  className={`${styles.switchButton} ${
                    isSwitchOn2 ? styles.switchOn : styles.switchOff
                  }`}
                  onClick={toggleSwitch2}
                >
                  {isSwitchOn2 ? "Enabled" : "Disabled"}
                </button>
              </div>
            </div>

            {/* Grid Cell 3 */}
            <div className={styles.gridItem}>
              <div className={styles.flexContainer}>
                <BlockCanvas
                  className={styles.blockCanvas}
                  item={
                    <BlockPillarSpinner
                      geometry={boxGeometry}
                      floorMaterial={floor2Material}
                      obstacleMaterial={obstacleMaterial}
                    />
                  }
                />

                <button
                  className={`${styles.switchButton} ${
                    isSwitchOn3 ? styles.switchOn : styles.switchOff
                  }`}
                  onClick={toggleSwitch3}
                >
                  {isSwitchOn3 ? "Enabled" : "Disabled"}
                </button>
              </div>
            </div>

            {/* Grid Cell 4 */}
            <div className={styles.gridItem}>
              <div className={styles.flexContainer}>
                <BlockCanvas
                  className={styles.blockCanvas}
                  item={
                    <BlockSpinner
                      geometry={boxGeometry}
                      floorMaterial={floor2Material}
                      obstacleMaterial={obstacleMaterial}
                    />
                  }
                />

                <button
                  className={`${styles.switchButton} ${
                    isSwitchOn4 ? styles.switchOn : styles.switchOff
                  }`}
                  onClick={toggleSwitch4}
                >
                  {isSwitchOn4 ? "Enabled" : "Disabled"}
                </button>
              </div>
            </div>

            {/* Grid Cell 5 */}
            <div className={styles.gridItem}>
              <div className={styles.flexContainer}>
                <BlockCanvas
                  className={styles.blockCanvas}
                  item={
                    <BlockDoor
                      geometry={boxGeometry}
                      floorMaterial={floor2Material}
                      obstacleMaterial={obstacleMaterial}
                    />
                  }
                />

                <button
                  className={`${styles.switchButton} ${
                    isSwitchOn5 ? styles.switchOn : styles.switchOff
                  }`}
                  onClick={toggleSwitch5}
                >
                  {isSwitchOn5 ? "Enabled" : "Disabled"}
                </button>
              </div>
            </div>
            {/* Grid Cell 6 */}
            <div className={styles.gridItem}>
              <div className={styles.flexContainer}>
                <BlockCanvas
                  className={styles.blockCanvas}
                  item={
                    <BlockDoubleDoor
                      geometry={boxGeometry}
                      floorMaterial={floor2Material}
                      obstacleMaterial={obstacleMaterial}
                    />
                  }
                />

                <button
                  className={`${styles.switchButton} ${
                    isSwitchOn6 ? styles.switchOn : styles.switchOff
                  }`}
                  onClick={toggleSwitch6}
                >
                  {isSwitchOn6 ? "Enabled" : "Disabled"}
                </button>
              </div>
            </div>
            {/* Grid Cell 7 */}
            <div className={styles.gridItem}>
              <div className={styles.flexContainer}>
                <BlockCanvas
                  className={styles.blockCanvas}
                  item={
                    <BlockLimbo
                      geometry={boxGeometry}
                      floorMaterial={floor2Material}
                      obstacleMaterial={obstacleMaterial}
                    />
                  }
                />

                <button
                  className={`${styles.switchButton} ${
                    isSwitchOn7 ? styles.switchOn : styles.switchOff
                  }`}
                  onClick={toggleSwitch7}
                >
                  {isSwitchOn7 ? "Enabled" : "Disabled"}
                </button>
              </div>
            </div>
            {/* Grid Cell 8 */}
            <div className={styles.gridItem}>
              <div className={styles.flexContainer}>
                <BlockCanvas
                  className={styles.blockCanvas}
                  item={
                    <BlockRandomPillar
                      geometry={boxGeometry}
                      floorMaterial={floor2Material}
                      obstacleMaterial={obstacleMaterial}
                    />
                  }
                />

                <button
                  className={`${styles.switchButton} ${
                    isSwitchOn8 ? styles.switchOn : styles.switchOff
                  }`}
                  onClick={toggleSwitch8}
                >
                  {isSwitchOn8 ? "Enabled" : "Disabled"}
                </button>
              </div>
            </div>
            {/* Grid Cell 9 */}
            <div className={styles.gridItem}>
              <div className={styles.flexContainer}>
                <BlockCanvas
                  className={styles.blockCanvas}
                  item={
                    <BlockAxe
                      geometry={boxGeometry}
                      floorMaterial={floor2Material}
                      obstacleMaterial={obstacleMaterial}
                    />
                  }
                />

                <button
                  className={`${styles.switchButton} ${
                    isSwitchOn9 ? styles.switchOn : styles.switchOff
                  }`}
                  onClick={toggleSwitch9}
                >
                  {isSwitchOn9 ? "Enabled" : "Disabled"}
                </button>
              </div>
            </div>
            {/* Grid Cell 10 */}
            <div className={styles.gridItem}>
              <div className={styles.flexContainer}>
                <BlockCanvas
                  className={styles.blockCanvas}
                  item={
                    <BlockTriangle
                      geometry={boxGeometry}
                      floorMaterial={floor2Material}
                      obstacleMaterial={obstacleMaterial}
                    />
                  }
                />

                <button
                  className={`${styles.switchButton} ${
                    isSwitchOn10 ? styles.switchOn : styles.switchOff
                  }`}
                  onClick={toggleSwitch10}
                >
                  {isSwitchOn10 ? "Enabled" : "Disabled"}
                </button>
              </div>
            </div>
            {/* Grid Cell 11 */}
            <div className={styles.gridItem}>
              <div className={styles.flexContainer}>
                <BlockCanvas
                  item={
                    <BlockTriangleVar2
                      geometry={boxGeometry}
                      floorMaterial={floor2Material}
                      obstacleMaterial={obstacleMaterial}
                    />
                  }
                />

                <button
                  className={`${styles.switchButton} ${
                    isSwitchOn11 ? styles.switchOn : styles.switchOff
                  }`}
                  onClick={toggleSwitch11}
                >
                  {isSwitchOn11 ? "Enabled" : "Disabled"}
                </button>
              </div>
            </div>
            {/* Grid Cell 12 */}
            <div className={styles.gridItem}>
              <div className={styles.flexContainer}>
                <img
                  src="ball.png"
                  style={{ padding: "10px", width: "30px", height: "30px" }}
                  alt="logo"
                />

                <button className={styles.switchComingSoon}>EMPTY</button>
              </div>
            </div>
            {/* Grid Cell 13 */}
            <div className={styles.gridItem}>
              <div className={styles.flexContainer}>
                <img
                  src="ball.png"
                  style={{ padding: "10px", width: "30px", height: "30px" }}
                  alt="logo"
                />

                <button className={styles.switchComingSoon}>EMPTY</button>
              </div>
            </div>
            {/* Grid Cell 14 */}
            <div className={styles.gridItem}>
              <div className={styles.flexContainer}>
                <img
                  src="ball.png"
                  style={{ padding: "10px", width: "30px", height: "30px" }}
                  alt="logo"
                />

                <button className={styles.switchComingSoon}>EMPTY</button>
              </div>
            </div>
            {/* Grid Cell 15 */}
            <div className={styles.gridItem}>
              <div className={styles.flexContainer}>
                <img
                  src="ball.png"
                  style={{ padding: "10px", width: "30px", height: "30px" }}
                  alt="logo"
                />

                <button className={styles.switchComingSoon}>EMPTY</button>
              </div>
            </div>
            {/* Grid Cell 16 */}
            <div className={styles.gridItem}>
              <div className={styles.flexContainer}>
                <img
                  src="ball.png"
                  style={{ padding: "10px", width: "30px", height: "30px" }}
                  alt="logo"
                />

                <button className={styles.switchComingSoon}>EMPTY</button>
              </div>
            </div>
            {/* Grid Cell 17 */}
            <div className={styles.gridItem}>
              <div className={styles.flexContainer}>
                <img
                  src="ball.png"
                  style={{ padding: "10px", width: "30px", height: "30px" }}
                  alt="logo"
                />
                <button className={styles.switchComingSoon}>EMPTY</button>
              </div>
            </div>
            {/* Grid Cell 18 */}
            <div className={styles.gridItem}>
              <div className={styles.flexContainer}>
                <img
                  src="ball.png"
                  style={{ padding: "10px", width: "30px", height: "30px" }}
                  alt="logo"
                />

                <button className={styles.switchComingSoon}>EMPTY</button>
              </div>
            </div>
            {/* Grid Cell 19 */}
            <div className={styles.gridItem}>
              <div className={styles.flexContainer}>
                <img
                  src="ball.png"
                  style={{ padding: "10px", width: "30px", height: "30px" }}
                  alt="logo"
                />

                <button className={styles.switchComingSoon}>EMPTY</button>
              </div>
            </div>
            {/* Grid Cell 20 */}
            <div className={styles.gridItem}>
              <div className={styles.flexContainer}>
                <img
                  src="ball.png"
                  style={{ padding: "10px", width: "30px", height: "30px" }}
                  alt="logo"
                />

                <button className={styles.switchComingSoon}>EMPTY</button>
              </div>
            </div>
            {/* Grid Cell 21 */}
            <div className={styles.gridItem}>
              <div className={styles.flexContainer}>
                <img
                  src="ball.png"
                  style={{ padding: "10px", width: "30px", height: "30px" }}
                  alt="logo"
                />

                <button className={styles.switchComingSoon}>EMPTY</button>
              </div>
            </div>
            {/* Grid Cell 22 */}
            <div className={styles.gridItem}>
              <div className={styles.flexContainer}>
                <img
                  src="ball.png"
                  style={{ padding: "10px", width: "30px", height: "30px" }}
                  alt="logo"
                />

                <button className={styles.switchComingSoon}>EMPTY</button>
              </div>
            </div>
            {/* Grid Cell 23 */}
            <div className={styles.gridItem}>
              <div className={styles.flexContainer}>
                <img
                  src="ball.png"
                  style={{ padding: "10px", width: "30px", height: "30px" }}
                  alt="logo"
                />

                <button className={styles.switchComingSoon}>EMPTY</button>
              </div>
            </div>
          </div>
          <h1 className={styles.descriptionTrapSelector}>
            choose the type of blocks in your game.
          </h1>
        </div>

{/* ---------------MIDDLE CONTAINER ---------------------------*/}


        <div className={styles.middlecontainer}>
          <div className={styles.middlecontainer__inner}>

            {/* Item 1 */}
            <div className={styles.gridItem}>
              <div className={styles.flexContainer}>
                <img
                  src="ball.png"
                  style={{ padding: "10px", width: "100px", height: "100px" }}
                  alt="logo"
                />
                <h3>10:3</h3>

              </div>
            </div>
            {/* Item 2 */}
            <div className={styles.gridItem}>
              <div className={styles.flexContainer}>
                <img
                  src="ball.png"
                  style={{ padding: "10px", width: "100px", height: "100px" }}
                  alt="logo"
                />
                <h3>10:3</h3>

              </div>
            </div>
            {/* Item 3 */}
            <div className={styles.gridItem}>
              <div className={styles.flexContainer}>
                <img
                  src="ball.png"
                  style={{ padding: "10px", width: "100px", height: "100px" }}
                  alt="logo"
                />
                <h3>10:3</h3>

              </div>
            </div>
            {/* Item 4 */}
            <div className={styles.gridItem}>
              <div className={styles.flexContainer}>
                <img
                  src="ball.png"
                  style={{ padding: "10px", width: "100px", height: "100px" }}
                  alt="logo"
                />
                <h3>10:3</h3>

              </div>
            </div>
            {/* Item 5 */}
            <div className={styles.gridItem}>
              <div className={styles.flexContainer}>
                <img
                  src="ball.png"
                  style={{ padding: "10px", width: "100px", height: "100px" }}
                  alt="logo"
                />
                <h3>10:3</h3>

              </div>
            </div>
            {/* Item 6 */}
            <div className={styles.gridItem}>
              <div className={styles.flexContainer}>
                <img
                  src="ball.png"
                  style={{ padding: "10px", width: "100px", height: "100px" }}
                  alt="logo"
                />
                <h3>10:3</h3>

              </div>
            </div>
            {/* Item 7 */}
            <div className={styles.gridItem}>
              <div className={styles.flexContainer}>
                <img
                  src="ball.png"
                  style={{ padding: "10px", width: "100px", height: "100px" }}
                  alt="logo"
                />
                <h3>10:3</h3>

              </div>
            </div>
            {/* Item 8 */}
            <div className={styles.gridItem}>
              <div className={styles.flexContainer}>
                <img
                  src="ball.png"
                  style={{ padding: "10px", width: "100px", height: "100px" }}
                  alt="logo"
                />
                <h3>10:3</h3>

              </div>
            </div>
            {/* Item 9 */}
            <div className={styles.gridItem}>
              <div className={styles.flexContainer}>
                <img
                  src="ball.png"
                  style={{ padding: "10px", width: "100px", height: "100px" }}
                  alt="logo"
                />
                <h3>10:3</h3>

              </div>
            </div>
            {/* Item 10 */}
            <div className={styles.gridItem}>
              <div className={styles.flexContainer}>
                <img
                  src="ball.png"
                  style={{ padding: "10px", width: "100px", height: "100px" }}
                  alt="logo"
                />
                <h3>10:3</h3>

              </div>
            </div>
          </div>
        </div>

        <div className={styles.rightcontainer}>awerfawfewa</div>
      </div>
    </>
  );
}
