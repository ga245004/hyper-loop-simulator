import React, { useRef, useState } from "react";
import { Canvas, useFrame, useStore } from "@react-three/fiber";
import { AmbientLightObject } from "./Objects/AmbientLightObject";
import { PointLightObject } from "./Objects/PointLightObject";
import { BoxObject } from "./Objects/BoxObject";
import { Editor } from "./Editor/Editor";
import { OrbitControls } from "@react-three/drei";
import { SportLightObject } from "./Objects/SportLightObject";
import { PackageObject } from "./Objects/PackageObject";

const SimulatorCanvas = () => {
  return (
    <Canvas>
      <OrbitControls />
      <AmbientLightObject />
      <PointLightObject position={[10, 10, 10]} />
      <SportLightObject position={[10, 10, 10]} />
      <PackageObject />
      <BoxObject color={"#ff0000"} position={[0, 0, 0]} />
      <BoxObject color={"#00ff00"} position={[1.5, 0, 0]} />
      <BoxObject color={"#0000ff"} position={[3, 0, 0]} />
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
