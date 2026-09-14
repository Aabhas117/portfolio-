import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import skills from "../data/skills";
import { Text } from "@react-three/drei";
import { useTheme } from "../context/ThemeContext";

function SkillNetwork({ position = [-5, 1.5, -2], scale = 0.85 }) {
  const groupRef = useRef();
  const { threeConfig } = useTheme();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 0.6) * 0.1;
    }
  });

  const categoryPositions = [
    [-2.8, 2.0, 0],   // Programming Languages
    [0.0, 3.2, -0.5],  // Core Computer Science
    [2.8, 2.0, 0],   // Backend Development
    [-3.2, -1.0, 0],  // Frontend Development
    [0.0, -2.5, -0.5], // Database & Cloud
    [3.2, -1.0, 0],   // Developer Tools
  ];

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Central Network Hub Node */}
      <mesh position={[0, 0, 0]}>
        <octahedronGeometry args={[0.7, 0]} />
        <meshStandardMaterial
          color={threeConfig.meshSolidColor}
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>

      <Text
        position={[0, 1.0, 0]}
        fontSize={0.22}
        color={threeConfig.text3DColor}
        fillOpacity={threeConfig.text3DFillOpacity || 0.45}
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.1}
      >
        SKILL NETWORK
      </Text>

      {/* Categories & Skill Clusters */}
      {skills.map((catObj, index) => {
        const catPos = categoryPositions[index % categoryPositions.length];
        
        return (
          <group key={catObj.category} position={catPos}>
            {/* Category Central Mesh Node */}
            <mesh>
              <sphereGeometry args={[0.35, 16, 16]} />
              <meshStandardMaterial
                color={threeConfig.meshWireframeColor}
                roughness={0.3}
                metalness={0.6}
                transparent
                opacity={0.35}
              />
            </mesh>

            {/* Category Name Label */}
            <Text
              position={[0, 0.55, 0]}
              fontSize={0.18}
              color={threeConfig.text3DColor}
              fillOpacity={threeConfig.text3DFillOpacity || 0.4}
              anchorX="center"
              anchorY="middle"
              letterSpacing={0.08}
            >
              {catObj.category.toUpperCase()}
            </Text>

            {/* Sub-Skill Mini Nodes */}
            {catObj.skills.map((skillName, skillIdx) => {
              const angle = (skillIdx / catObj.skills.length) * Math.PI * 2;
              const radius = 1.1;
              const nodeX = Math.cos(angle) * radius;
              const nodeY = Math.sin(angle) * radius;

              return (
                <group key={skillName} position={[nodeX, nodeY, 0]}>
                  <mesh>
                    <sphereGeometry args={[0.1, 12, 12]} />
                    <meshBasicMaterial color={threeConfig.meshNodeColor} transparent opacity={0.4} />
                  </mesh>
                </group>
              );
            })}
          </group>
        );
      })}
    </group>
  );
}

export default SkillNetwork;
