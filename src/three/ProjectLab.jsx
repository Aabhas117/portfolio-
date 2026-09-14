import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import projects from "../data/projects";
import { Text } from "@react-three/drei";

function ProjectLab({ position = [0, -3.8, -1], scale = 0.9 }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y -= delta * 0.1;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 0.7 + 1) * 0.12;
    }
  });

  const projectOffsets = [
    [-3.2, 0, 0], // Vidyora
    [3.2, 0, 0],  // MERN Grocery
  ];

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Project Lab Central Hub Marker */}
      <mesh position={[0, 0.8, 0]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#6366f1" wireframe />
      </mesh>

      <Text
        position={[0, 1.4, 0]}
        fontSize={0.24}
        color="#a855f7"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.12}
      >
        PROJECT LAB ARCHITECTURE
      </Text>

      {/* Render 3D Project Structure Nodes */}
      {projects.map((proj, idx) => {
        const pOffset = projectOffsets[idx % projectOffsets.length];
        const displayTitle = proj.name === "Vidyora" ? "VIDYORA" : "MERN GROCERY";

        return (
          <group key={proj.id} position={pOffset}>
            {/* Main Architectural Structure */}
            <mesh>
              <dodecahedronGeometry args={[0.8, 0]} />
              <meshStandardMaterial
                color="#6366f1"
                wireframe
                transparent
                opacity={0.6}
              />
            </mesh>

            {/* Inner Core */}
            <mesh>
              <octahedronGeometry args={[0.4, 0]} />
              <meshStandardMaterial
                color="#38bdf8"
                roughness={0.2}
                metalness={0.8}
              />
            </mesh>

            {/* Orbital Ring */}
            <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
              <torusGeometry args={[1.3, 0.01, 16, 32]} />
              <meshBasicMaterial color="#a855f7" transparent opacity={0.5} />
            </mesh>

            {/* Title Label */}
            <Text
              position={[0, 1.2, 0]}
              fontSize={0.22}
              color="#f8fafc"
              anchorX="center"
              anchorY="middle"
              letterSpacing={0.1}
            >
              {displayTitle}
            </Text>

            {/* Tech Stack Sub-Nodes */}
            {proj.technologies.slice(0, 4).map((tech, techIdx) => {
              const angle = (techIdx / 4) * Math.PI * 2;
              const radius = 1.3;
              const tx = Math.cos(angle) * radius;
              const ty = Math.sin(angle) * radius;

              return (
                <mesh key={tech} position={[tx, ty, 0]}>
                  <sphereGeometry args={[0.07, 12, 12]} />
                  <meshBasicMaterial color="#38bdf8" />
                </mesh>
              );
            })}
          </group>
        );
      })}
    </group>
  );
}

export default ProjectLab;
