import { Canvas } from "@react-three/fiber";
import UniverseScene from "./UniverseScene";
import "./DigitalUniverse.css";

function DigitalUniverse() {
  return (
    <div className="digital-universe-bg" aria-hidden="true">
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
