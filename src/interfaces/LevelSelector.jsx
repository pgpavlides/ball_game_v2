import React, { useState, useRef } from "react";
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
import { Link } from "react-router-dom";

import useGame from "../stores/useGame.jsx";

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

  const {
    trap1,
    trap2,
    trap3,
    trap4,
    trap5,
    trap6,
    trap7,
    trap8,
    trap9,
    trap10,
    trap11,
    trap12,
    updateTrap1,
    updateTrap2,
    updateTrap3,
    updateTrap4,
    updateTrap5,
    updateTrap6,
    updateTrap7,
    updateTrap8,
    updateTrap9,
    updateTrap10,
    updateTrap11,
    updateTrap12,
    count,
    updateCount,
    blocksPerRow,
    updateBlocksPerRow,
    updateTrap,
  } = useGame();

  const [isSwitchOn, setSwitchOn] = useState(trap1);
  const [isSwitchOn1, setSwitchOn1] = useState(trap2);
  const [isSwitchOn2, setSwitchOn2] = useState(trap3);
  const [isSwitchOn3, setSwitchOn3] = useState(trap4);
  const [isSwitchOn4, setSwitchOn4] = useState(trap5);
  const [isSwitchOn5, setSwitchOn5] = useState(trap6);
  const [isSwitchOn6, setSwitchOn6] = useState(trap7);
  const [isSwitchOn7, setSwitchOn7] = useState(trap8);
  const [isSwitchOn8, setSwitchOn8] = useState(trap9);
  const [isSwitchOn9, setSwitchOn9] = useState(trap10);
  const [isSwitchOn10, setSwitchOn10] = useState(trap11);
  const [isSwitchOn11, setSwitchOn11] = useState(trap12);

  const [levels, setLevels] = useState([...Array(15)].map(() => false));

  const images = [
    "ball.png",
    "ball.png",
    "ball.png",
    "ball.png",
    "ball.png",
    "ball.png",
    "ball.png",
    "ball.png",
    "ball.png",
    "ball.png",
    "ball.png",
    "ball.png",
    "ball.png",
    "ball.png",
    "ball.png",
  ];

  const titles = [
    "3:9",
    "3:21",
    "3:32",
    "5:50",
    "5:100",
    "5:150",
    "7:70",
    "7:140",
    "7:280",
    "9:72",
    "9:144",
    "9:288",
    "11:99",
    "11:297",
    "11:594",
  ];

  const values = [
    [3, 9],
    [3, 21],
    [3, 32],
    [5, 50],
    [5, 100],
    [5, 150],
    [7, 70],
    [7, 140],
    [7, 280],
    [9, 72],
    [9, 144],
    [9, 288],
    [11, 99],
    [11, 297],
    [11, 594],
  ];

  

  const handleClick = (val1, val2) => {
    updateBlocksPerRow(val1);
    updateCount(val2);
  };

  const toggleSetLevel = (index) => {
    setLevels((prevLevels) =>
      prevLevels.map((level, i) => (i === index ? !level : false))
    );
    handleClick(...values[index]);
  };

  // console.log(trap1);

  const toggleSwitch = () => {
    setSwitchOn(!isSwitchOn);
    updateTrap1(!trap1)
    console.log(trap1);
  };
  const toggleSwitch1 = () => {
    setSwitchOn1(!isSwitchOn1);
    updateTrap2(!trap2)
    console.log(trap2);
  };
  const toggleSwitch2 = () => {
    setSwitchOn2(!isSwitchOn2);
    updateTrap3(!trap3)
    console.log(trap3);
  };
  const toggleSwitch3 = () => {
    setSwitchOn3(!isSwitchOn3);
    updateTrap4(!trap4)
    console.log(trap4);
  };
  const toggleSwitch4 = () => {
    setSwitchOn4(!isSwitchOn4);
    updateTrap5(!trap5)
    console.log(trap5);
  };
  const toggleSwitch5 = () => {
    setSwitchOn5(!isSwitchOn5);
    updateTrap6(!trap6)
    console.log(trap6);
  };
  const toggleSwitch6 = () => {
    setSwitchOn6(!isSwitchOn6);
    updateTrap7(!trap7)
    console.log(trap7);
  };
  const toggleSwitch7 = () => {
    setSwitchOn7(!isSwitchOn7);
    updateTrap8(!trap8)
    console.log(trap8);
  };
  const toggleSwitch8 = () => {
    setSwitchOn8(!isSwitchOn8);
    updateTrap9(!trap9)
    console.log(trap9);
  };
  const toggleSwitch9 = () => {
    setSwitchOn9(!isSwitchOn9);
    updateTrap10(!trap10)
    console.log(trap10);
  };
  const toggleSwitch10 = () => {
    setSwitchOn10(!isSwitchOn10);
    updateTrap11(!trap11)
    console.log(trap11);
  };
  const toggleSwitch11 = () => {
    setSwitchOn11(!isSwitchOn11);
    updateTrap12(!trap12)
    console.log(trap12);
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
          <Link to="/">
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
          </Link>
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
                  onClick={() => {
                    toggleSwitch();
                  }}
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
                  onClick={() => {
                    toggleSwitch1();

                  }}
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
                  onClick={() => {
                    toggleSwitch2();
                  }}
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
                  onClick={() => {
                    toggleSwitch3();
                  }}
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
                  onClick={() => {
                    toggleSwitch4();
                  }}
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
                  onClick={() => {
                    toggleSwitch5();
                  }}
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
                  onClick={() => {
                    toggleSwitch6();
                  }}
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
                  onClick={() => {
                    toggleSwitch7();
                  }}
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
                  onClick={() => {
                    toggleSwitch8();
                  }}
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
                  onClick={() => {
                    toggleSwitch9();
                  }}
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
                  onClick={() => {
                    toggleSwitch10();
                  }}
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
                  onClick={() => {
                    toggleSwitch11();
                  }}
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
          <h1 className={styles.titleTrapSelector}>Stage Selector</h1>
          <div className={styles.middlecontainer__inner}>
            {images.map((src, index) => (
              <div className={styles.gridItem} key={index}>
                <div className={styles.flexContainer}>
                  <img
                    className={`${styles.levelimage} ${
                      levels[index] ? styles.selected : ""
                    }`}
                    onClick={() => {
                      toggleSetLevel(index);
                      // Replace this with your actual function call
                    }}
                    src={src}
                    style={{ padding: "10px", width: "70px", height: "70px" }}
                    alt="logo"
                  />
                  <h3>{titles[index]}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------------RIGHT CONTAINER ---------------------------*/}

        <div className={styles.rightcontainer}>
          <h1 className={styles.titleTrapSelector}></h1>

          <div className={styles.rightcontainer__inner}>
            {/* Item 1 */}
            {/* <div className={styles.gridItemRight}>
              <div className={styles.flexContainerRight}>
              <button
                  className={`${styles.playButton} ${styles.ballOptions}`}
                >
                  🥦
                </button>
              </div>
            </div> */}
            {/* Item 1 */}
            <div className={styles.gridItemRight}>
              <div className={styles.flexContainerRight}>
                <Link to="/">
                  <button className={`${styles.playButton} ${styles.ballBack}`}>
                    BACK
                  </button>
                </Link>
              </div>
            </div>
            {/* Item 1 */}
            {/* <div className={styles.gridItemRight}>
              <div className={styles.flexContainerRight}>
                <button
                  className={`${styles.playButton} ${styles.ballColor}`}
                >
                  BALL COLOR
                </button>
              </div>
            </div> */}
            {/* Item 1 */}
            <div className={styles.gridItemRight}>
              <div className={styles.flexContainerRight}>
                <Link to="/level">
                  <button className={styles.playButton}>PLAY</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
