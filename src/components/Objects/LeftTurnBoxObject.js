import { animated } from "@react-spring/three";
import { forwardRef } from "react";

export const LeftTurnBoxObject = forwardRef((props, ref) => {
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
      <meshStandardMaterial color={color} />
    </animated.mesh>
  );
});
