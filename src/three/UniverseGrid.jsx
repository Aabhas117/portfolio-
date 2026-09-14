import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTheme } from "../context/ThemeContext";

function UniverseGrid() {
  const gridRef = useRef();
  const { threeConfig } = useTheme();

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = (state.clock.getElapsedTime() * 0.4) % 2;
      if (gridRef.current.material) {
        gridRef.current.material.transparent = true;
        gridRef.current.material.opacity = threeConfig.gridOpacity || 0.15;
      }
    }
  });

  return (
    <gridHelper
      key={threeConfig.gridColors.join("-")}
      ref={gridRef}
      args={[120, 60, threeConfig.gridColors[0], threeConfig.gridColors[1]]}
      position={[0, -6, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

export default UniverseGrid;
