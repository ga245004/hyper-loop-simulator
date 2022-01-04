import { animated } from "@react-spring/three";
import { forwardRef } from "react";

export const TurnBoxObject = forwardRef((props, ref) => {
  const {
    color,
    position,
    scale = 1,
    width = 1,
    height = 1,
    depth = 1,
    rotation = [0, 0, 0],
    onClick = undefined
  } = props;

  return (
    <animated.group
      ref={ref}
      position={position}
      scale={scale}
      onClick={onClick}
      rotation={rotation}
    >
      <animated.mesh position={[0, 0, 0]}>
        <boxGeometry args={[width, height, depth]} />
        <meshStandardMaterial color={color} />
      </animated.mesh>
      <animated.mesh position={[0, 0, -1]}>
        <boxGeometry args={[width, height, depth]} />
        <meshStandardMaterial color={color} />
      </animated.mesh>
    </animated.group>
  );
});
