import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";

function DeveloperCore({ position = [4.5, 0.5, 0], scale = 1 }) {
  const groupRef = useRef();
  const innerRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Living core rotation & floating oscillation
      groupRef.current.rotation.y += delta * 0.15;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 0.8) * 0.15;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.3;
      innerRef.current.rotation.x += delta * 0.1;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= delta * 0.25;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Central Outer Wireframe Icosahedron */}
      <mesh>
        <icosahedronGeometry args={[1.6, 1]} />
        <meshStandardMaterial
          color="#8B5CF6"
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>

      {/* Inner Core Solid Octahedron */}
      <mesh ref={innerRef}>
        <octahedronGeometry args={[0.9, 0]} />
        <meshStandardMaterial
          color="#20C9A6"
          roughness={0.4}
          metalness={0.5}
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* Primary Orbital Ring */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 3, Math.PI / 6, 0]}>
        <torusGeometry args={[2.5, 0.015, 16, 64]} />
        <meshBasicMaterial color="#F472B6" transparent opacity={0.15} />
      </mesh>

      {/* Secondary Orbital Ring */}
      <mesh ref={ring2Ref} rotation={[-Math.PI / 4, -Math.PI / 4, Math.PI / 3]}>
        <torusGeometry args={[3.1, 0.012, 16, 64]} />
        <meshBasicMaterial color="#60A5FA" transparent opacity={0.15} />
      </mesh>

      {/* Orbital System Nodes */}
      <mesh position={[2.2, 1.2, 0]}>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshBasicMaterial color="#20C9A6" transparent opacity={0.3} />
      </mesh>

      <mesh position={[-2.4, -1.0, 0.8]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#8B5CF6" transparent opacity={0.3} />
      </mesh>

      <mesh position={[0.5, -2.8, -0.5]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshBasicMaterial color="#F472B6" transparent opacity={0.3} />
      </mesh>

      {/* Minimal Developer Identity Text */}
      <Text
        position={[0, 2.4, 0]}
        fontSize={0.38}
        color="#555555"
        fillOpacity={0.35}
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.12}
      >
        AABHAS
      </Text>

      <Text
        position={[0, -2.4, 0]}
        fontSize={0.18}
        color="#555555"
        fillOpacity={0.3}
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.15}
      >
        DEVELOPER CORE
      </Text>
    </group>
  );
}

export default DeveloperCore;
