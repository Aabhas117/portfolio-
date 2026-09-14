import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function UniverseGrid() {
  const gridRef = useRef();

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = (state.clock.getElapsedTime() * 0.4) % 2;
    }
  });

  return (
    <gridHelper
      ref={gridRef}
      args={[120, 60, "#38bdf8", "#1e293b"]}
      position={[0, -6, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

export default UniverseGrid;
