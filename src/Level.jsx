import * as THREE from "three";
import { RigidBody, CuboidCollider } from "@react-three/rapier";
import { useEffect, useMemo, useState } from "react";

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

import { useControls } from "leva";

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const floor1Material = new THREE.MeshStandardMaterial({ color: "limegreen" });
const floor2Material = new THREE.MeshStandardMaterial({ color: "greenyellow" });
const obstacleMaterial = new THREE.MeshStandardMaterial({ color: "darkgreen" });
const wallMaterial = new THREE.MeshStandardMaterial({ color: "slategrey" });

export function Level({}) {
  const [blockSpinnerActive, setBlockSpinnerActive] = useState(true);
  const [blockPillarSpinnerActive, setBlockPillarSpinnerActive] =
    useState(true);
  const [blockSpinnerClockActive, setBlockSpinnerClockActive] = useState(true);
  const [blockSpinnerBarrelActive, setBlockSpinnerBarrelActive] =
    useState(true);
  const [blockDoorActive, setBlockDoorActive] = useState(true);
  const [blockDoubleDoorActive, setBlockDoubleDoorActive] = useState(true);
  const [blockLimboActive, setBlockLimboActive] = useState(true);
  const [blockRandomPillarActive, setBlockRandomPillarActive] = useState(true);
  const [blockAxeActive, setBlockAxeActive] = useState(true);
  const [blockTriangleActive, setBlockTriangleActive] = useState(false);
  const [blockTriangleVar2Active, setBlockTriangleVar2Active] = useState(false);
  const [blockOctahedronActive, setBlockOctahedronActive] = useState(false);

  const controls = useControls(() => ({
    
    Spinner: {
      value: blockSpinnerActive,
      onChange: (value) => setBlockSpinnerActive(value),
    },
    PillarSpinner: {
      value: blockPillarSpinnerActive,
      onChange: (value) => setBlockPillarSpinnerActive(value),
    },
    SpinnerClock: {
      value: blockSpinnerClockActive,
      onChange: (value) => setBlockSpinnerClockActive(value),
    },
    SpinnerBarrel: {
      value: blockSpinnerBarrelActive,
      onChange: (value) => setBlockSpinnerBarrelActive(value),
    },
    DoorActive: {
      value: blockDoorActive,
      onChange: (value) => setBlockDoorActive(value),
    },
    DoubleDoor: {
      value: blockDoubleDoorActive,
      onChange: (value) => setBlockDoubleDoorActive(value),
    },
    Limbo: {
      value: blockLimboActive,
      onChange: (value) => setBlockLimboActive(value),
    },
    RandomPillar: {
      value: blockRandomPillarActive,
      onChange: (value) => setBlockRandomPillarActive(value),
    },
    Axe: {
      value: blockAxeActive,
      onChange: (value) => setBlockAxeActive(value),
    },
    Triangle: {
      value: blockTriangleActive,
      onChange: (value) => setBlockTriangleActive(value),
    },
    TriangleVar2: {
      value: blockTriangleVar2Active,
      onChange: (value) => setBlockTriangleVar2Active(value),
    },
    Octahedron: {
      value: blockOctahedronActive,
      onChange: (value) => setBlockOctahedronActive(value),
    },
  }));

  // useEffect(() => {
  //   console.log("BlockSpinnerActive:", blockSpinnerActive);
  // }, [blockSpinnerActive]);

  // useEffect(() => {
  //   console.log(blockSpinnerActive);
  // }, [blockSpinnerActive]);
  const { count, blocksPerRow, blockSpacing } = useControls({
    count: { value: 90, min: 0, max: 500 },
    blocksPerRow: { value: 3, min: 3, max: 30, step: 2},
    blockSpacing: { value: 4, min: 4, max: 10, step: 1 },
  });

  

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
      <Bounds
        geometry={boxGeometry}
        wallMaterial={wallMaterial}
        widthLength={blocksPerRow}
        heightLength={heightLength}
        
      />
    </>
  );
}
