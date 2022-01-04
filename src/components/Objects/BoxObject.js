import { forwardRef, useRef } from "react";
import { animated } from "@react-spring/three";

export const BoxObject = forwardRef((props, ref) => {
  const {
    color,
    position,
    scale = 1,
    width = 1,
    height = 1,
    depth = 1,
    onClick = undefined
  } = props;
  return (
    <animated.mesh
      ref={ref}
      position={position}
      scale={scale}
      onClick={onClick}
    >
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial color={color} />
    </animated.mesh>
  );
});
