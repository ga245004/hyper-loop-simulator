export const BoxObject = ({ color, onClick, onPointerOver, onPointerOut }) => {
  return (
    <mesh
      scale={1}
      onClick={onClick}
      onPointerOver={onPointerOver}
      onPointerOut={onPointerOut}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
