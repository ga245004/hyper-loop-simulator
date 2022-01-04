import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { AmbientLightObject } from "./Objects/AmbientLightObject";
import { PointLightObject } from "./Objects/PointLightObject";
import { BoxObject } from "./Objects/BoxObject";
import { Editor } from "./Editor/Editor";
import { OrbitControls } from "@react-three/drei";

export const Simulator = () => {
  return (
    <Canvas>
      <OrbitControls />
      <Editor />
      <AmbientLightObject />
      <PointLightObject position={[10, 10, 10]} />
      <BoxObject />
    </Canvas>
  );
};
