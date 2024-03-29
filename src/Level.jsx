import * as THREE from "three";
import { RigidBody, CuboidCollider } from "@react-three/rapier";
import { useEffect, useMemo, useState } from "react";
import styles from "./interfaces/LevelSelector.module.scss";

import { Bounds } from "./Blocks/Bounds";
import { BlockStart } from "./Blocks/BlockStart";
import { BlockEnd } from "./Blocks/BlockEnd";
import { BlockSpinner } from "./Blocks/BlockSpinner";
import { BlockSpinnerClock } from "./Blocks/BlockSpinnerClock";
import { BlockSpinnerBarrel } from "./Blocks/BlockSpinnerBarrel";
import { BlockPillarSpinner } from "./Blocks/BlockPillarSpinner";
import { BlockDoor } from "./Blocks/BlockDoor";
import { BlockDoubleDoor } from "./Blocks/BlockDoubleDoor";
import { BlockLimbo } from "./Blocks/BlockLimbo";
import { BlockRandomPillar } from "./Blocks/BlockRandomPillar";
import { BlockAxe } from "./Blocks/BlockAxe";
import { BlockTriangle } from "./Blocks/BlockTriangle";
import { BlockTriangleVar2 } from "./Blocks/BlockTriangleVar2";
import { BlockOctahedron } from "./Blocks/BlockOctahedron";

import useGame from "./stores/useGame.jsx";

import { useControls } from "leva";

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const floor1Material = new THREE.MeshStandardMaterial({ color: "limegreen" });
const floor2Material = new THREE.MeshStandardMaterial({ color: "greenyellow" });
const obstacleMaterial = new THREE.MeshStandardMaterial({ color: "red" });
const wallMaterial = new THREE.MeshStandardMaterial({ color: "slategrey" });

export function Level({}) {
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
  } = useGame();

  const count = useGame((state) => state.count);
  const blocksPerRow = useGame((state) => state.blocksPerRow);
  const blockSpacing = useGame((state) => state.blockSpacing);

  const [blockSpinnerActive, setBlockSpinnerActive] = useState(trap1);
  const [blockSpinnerClockActive, setBlockSpinnerClockActive] = useState(trap2);
  const [blockSpinnerBarrelActive, setBlockSpinnerBarrelActive] =
    useState(trap3);
    const [blockPillarSpinnerActive, setBlockPillarSpinnerActive] =
    useState(trap4);
    const [blockOctahedronActive, setBlockOctahedronActive] = useState(trap5);
    const [blockDoorActive, setBlockDoorActive] = useState(trap6);
    const [blockDoubleDoorActive, setBlockDoubleDoorActive] = useState(trap7);
    const [blockLimboActive, setBlockLimboActive] = useState(trap8);
    const [blockRandomPillarActive, setBlockRandomPillarActive] = useState(trap9);
  const [blockAxeActive, setBlockAxeActive] = useState(trap10);
  const [blockTriangleActive, setBlockTriangleActive] = useState(trap11);
  const [blockTriangleVar2Active, setBlockTriangleVar2Active] =
    useState(trap12);

  // const controls = useControls(() => ({
  //   Spinner: {
  //     value: blockSpinnerActive,
  //     onChange: (value) => setBlockSpinnerActive(value),
  //   },
  //   PillarSpinner: {
  //     value: blockPillarSpinnerActive,
  //     onChange: (value) => setBlockPillarSpinnerActive(value),
  //   },
  //   SpinnerClock: {
  //     value: blockSpinnerClockActive,
  //     onChange: (value) => setBlockSpinnerClockActive(value),
  //   },
  //   SpinnerBarrel: {
  //     value: blockSpinnerBarrelActive,
  //     onChange: (value) => setBlockSpinnerBarrelActive(value),
  //   },
  //   DoorActive: {
  //     value: blockDoorActive,
  //     onChange: (value) => setBlockDoorActive(value),
  //   },
  //   DoubleDoor: {
  //     value: blockDoubleDoorActive,
  //     onChange: (value) => setBlockDoubleDoorActive(value),
  //   },
  //   Limbo: {
  //     value: blockLimboActive,
  //     onChange: (value) => setBlockLimboActive(value),
  //   },
  //   RandomPillar: {
  //     value: blockRandomPillarActive,
  //     onChange: (value) => setBlockRandomPillarActive(value),
  //   },
  //   Axe: {
  //     value: blockAxeActive,
  //     onChange: (value) => setBlockAxeActive(value),
  //   },
  //   Triangle: {
  //     value: blockTriangleActive,
  //     onChange: (value) => setBlockTriangleActive(value),
  //   },
  //   TriangleVar2: {
  //     value: blockTriangleVar2Active,
  //     onChange: (value) => setBlockTriangleVar2Active(value),
  //   },
  //   Octahedron: {
  //     value: blockOctahedronActive,
  //     onChange: (value) => setBlockOctahedronActive(value),
  //   },
  // }));

  // useEffect(() => {
  //   console.log("BlockSpinnerActive:", blockSpinnerActive);
  // }, [blockSpinnerActive]);

  // useEffect(() => {
  //   console.log(blockSpinnerActive);
  // }, [blockSpinnerActive]);

  // const { count, blocksPerRow, blockSpacing } = useControls({
  //   count: { value: 90, min: 0, max: 500 },
  //   blocksPerRow: { value: 3, min: 3, max: 30, step: 2 },
  //   blockSpacing: { value: 4, min: 4, max: 10, step: 1 },
  // });

  let heightLength = count / blocksPerRow;

  const types = useMemo(() => {
    const activeTypes = [];
    if (blockSpinnerActive) activeTypes.push(BlockSpinner);
    if (blockPillarSpinnerActive) activeTypes.push(BlockPillarSpinner);
    if (blockSpinnerClockActive) activeTypes.push(BlockSpinnerClock);
    if (blockSpinnerBarrelActive) activeTypes.push(BlockSpinnerBarrel);
    if (blockDoorActive) activeTypes.push(BlockDoor);
    if (blockDoubleDoorActive) activeTypes.push(BlockDoubleDoor);
    if (blockLimboActive) activeTypes.push(BlockLimbo);
    if (blockRandomPillarActive) activeTypes.push(BlockRandomPillar);
    if (blockAxeActive) activeTypes.push(BlockAxe);
    if (blockTriangleActive) activeTypes.push(BlockTriangle);
    if (blockTriangleVar2Active) activeTypes.push(BlockTriangleVar2);
    if (blockOctahedronActive) activeTypes.push(BlockOctahedron);
    return activeTypes;
  }, [
    blockSpinnerActive,
    blockPillarSpinnerActive,
    blockSpinnerClockActive,
    blockSpinnerBarrelActive,
    blockDoorActive,
    blockDoubleDoorActive,
    blockLimboActive,
    blockRandomPillarActive,
    blockAxeActive,
    blockTriangleActive,
    blockTriangleVar2Active,
    blockOctahedronActive,
  ]);

  const blocks = useMemo(() => {
    const blocks = [];

    for (let i = 0; i < count; i++) {
      const type = types[Math.floor(Math.random() * types.length)];
      blocks.push(type);
    }

    return blocks;
  }, [count, types, blocksPerRow, blockSpacing]);

  return (
    <>
      <BlockStart
        position={[0, 0, 0]}
        geometry={boxGeometry}
        material={floor1Material}
      />
      {blocks.map((Block, index) => {
        const row = Math.floor(index / blocksPerRow);
        const col = (index % blocksPerRow) - Math.floor(blocksPerRow / 2);
        const x = col * blockSpacing;
        const y = 0;
        const z = -(row + 1) * blockSpacing;
        return (
          <Block
            key={index}
            geometry={boxGeometry}
            floorMaterial={floor2Material}
            obstacleMaterial={obstacleMaterial}
            position={[x, y, z]}
          />
        );
      })}
      <BlockEnd
        position={[0, 0, -(heightLength + 1) * blockSpacing]}
        geometry={boxGeometry}
        material={floor1Material}
      />
      <Bounds
        geometry={boxGeometry}
        wallMaterial={wallMaterial}
        widthLength={blocksPerRow}
        heightLength={heightLength}
      />
    </>
  );
}
