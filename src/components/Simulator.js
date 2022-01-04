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
import { TurnBoxObject } from "./Objects/TurnBoxObject";
import { updatePosition } from "./hyperloop";

const initialBoxes = [
  {
    id: 0,
    color: new Color(0xffffff),
    turn: ""
  }
];

const getInitState = () => {
  return initialBoxes;
};

const SimulatorCanvas = ({}) => {
  const [boxes, setBoxes] = useState(getInitState());
  const commands = useCommands();
  useEffect(() => {
    const addBox = (box) => {
      box.id = boxes.length;
      box.color = new Color(0xffffff);
      box.color.setHex(Math.random() * 0xffffff);
      setBoxes(boxes.concat([box]));
    };
    commands.subscribe("add", addBox);

    const clear = () => {
      setBoxes([]);
    };
    commands.subscribe("clear", clear);

    return () => {
      commands.unSubscribe("add", addBox);
      commands.unSubscribe("clear", clear);
    };
  }, [commands, boxes]);

  const renderBoxes = () => {
    let position = [-1, 0, 0];
    let direction = "X";
    let step = 1;
    const renderedBoxes = boxes.map(({ id, color, turn }, index) => {
      console.log("box", id, turn);
      let box = <></>;

      const updateValues = updatePosition(turn, position, direction, step);
      position = updateValues.position;
      direction = updateValues.direction;
      step = updateValues.step;

      if (false && turn === "left") {
        box = (
          <TurnBoxObject
            key={index + 1}
            color={color}
            position={[position[0], position[1], position[2]]}
            rotation={[0, 0, 0]}
          />
        );
      }

      if (true) {
        box = (
          <BoxObject
            key={index + 1}
            color={color}
            position={[position[0], position[1], position[2]]}
          />
        );
      }

      return box;
    });
    return renderedBoxes;
  };

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
      {boxes.length && renderBoxes()}
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
