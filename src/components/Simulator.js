import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useStore } from "@react-three/fiber";
import { AmbientLightObject } from "./Objects/AmbientLightObject";
import { PointLightObject } from "./Objects/PointLightObject";
import { BoxObject } from "./Objects/BoxObject";
import { Editor } from "./Editor/Editor";
import { OrbitControls, Sky, Stars } from "@react-three/drei";
import { SportLightObject } from "./Objects/SportLightObject";
import { PackageObject } from "./Objects/PackageObject";
import { useCommands } from "./useCommands";
import { Color } from "three";
import { LeftTurnBoxObject } from "./Objects/LeftTurnBoxObject";

const initialBoxes = [
  {
    id: 0,
    color: "#ff0000"
  },
  {
    id: 1,
    color: "#00ff00"
  },
  {
    id: 2,
    color: "#0000ff"
  }
];

const SimulatorCanvas = ({}) => {
  const [boxes, setBoxes] = useState(initialBoxes);
  const commands = useCommands();
  useEffect(() => {
    const addBox = (box) => {
      box.id = boxes.length;
      box.color = new Color(0xffffff);
      box.color.setHex(Math.random() * 0xffffff);
      setBoxes([box].concat(boxes));
    };
    commands.subscribe("add", addBox);

    return () => commands.unSubscribe("add", addBox);
  }, [commands, boxes]);

  return (
    <Canvas>
      <OrbitControls />
      <Sky
        distance={450000}
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
      />
      <Stars />
      <AmbientLightObject />
      <PointLightObject position={[10, 10, 10]} />
      <SportLightObject position={[10, 10, 10]} />
      <PackageObject distance={boxes.length * 1.1} />
      <LeftTurnBoxObject position={[-2, 0, 0]} color={"#ff88ff"} />
      {boxes.length &&
        boxes.map(({ id, color }, index) => {
          console.log(index);
          return (
            <BoxObject key={id} color={color} position={[index * 1.1, 0, 0]} />
          );
        })}
    </Canvas>
  );
};

export const Simulator = () => {
  return (
    <>
      <Editor />
      <SimulatorCanvas />
    </>
  );
};
