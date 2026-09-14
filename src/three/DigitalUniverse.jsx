import { Canvas } from "@react-three/fiber";
import UniverseScene from "./UniverseScene";
import { useTheme } from "../context/ThemeContext";
import "./DigitalUniverse.css";

function DigitalUniverse() {
  const { threeConfig } = useTheme();

  return (
    <div
      className="digital-universe-bg"
      style={{ backgroundColor: threeConfig.threeBg, transition: "background-color 0.3s ease" }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 2, 15], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <UniverseScene />
      </Canvas>
    </div>
  );
}

export default DigitalUniverse;
