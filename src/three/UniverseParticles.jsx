import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTheme } from "../context/ThemeContext";

function UniverseParticles({ count = 600 }) {
  const pointsRef = useRef();
  const { threeConfig } = useTheme();

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const s1 = Math.sin(i * 12.9898 + 78.233) * 43758.5453;
      const s2 = Math.sin(i * 63.7264 + 19.823) * 43758.5453;
      const s3 = Math.sin(i * 41.5231 + 93.112) * 43758.5453;
      pos[i * 3] = ((s1 - Math.floor(s1)) - 0.5) * 80;
      pos[i * 3 + 1] = ((s2 - Math.floor(s2)) - 0.5) * 50;
      pos[i * 3 + 2] = ((s3 - Math.floor(s3)) - 0.5) * 40 - 5;
    }
    return pos;
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color={threeConfig.particleColor}
        transparent
        opacity={threeConfig.particleOpacity || 0.25}
        sizeAttenuation
      />
    </points>
  );
}

export default UniverseParticles;
