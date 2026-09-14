import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function UniverseGrid() {
  const gridRef = useRef();

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = (state.clock.getElapsedTime() * 0.4) % 2;
      if (gridRef.current.material) {
        gridRef.current.material.transparent = true;
        gridRef.current.material.opacity = 0.08;
      }
    }
  });

  return (
    <gridHelper
      ref={gridRef}
      args={[120, 60, "#D9D6CE", "#E5E2D9"]}
      position={[0, -6, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

export default UniverseGrid;
