import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import UniverseGrid from "./UniverseGrid";
import UniverseParticles from "./UniverseParticles";
import DeveloperCore from "./DeveloperCore";
import SkillNetwork from "./SkillNetwork";
import ProjectLab from "./ProjectLab";

function UniverseScene() {
  const scrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state) => {
    // Gentle mouse & scroll parallax camera movement
    const targetX = state.pointer.x * 0.4;
    const targetY = 2 - scrollYRef.current * 0.002 - state.pointer.y * 0.3;

    state.camera.position.x += (targetX - state.camera.position.x) * 0.05;
    state.camera.position.y += (targetY - state.camera.position.y) * 0.05;
  });

  return (
    <>
      <ambientLight intensity={0.9} />
      <directionalLight position={[10, 10, 10]} intensity={0.6} />
      <pointLight position={[4.5, 1, 5]} intensity={0.3} color="#20C9A6" />
      <UniverseGrid />
      <UniverseParticles count={600} />
      <DeveloperCore position={[4.5, 0.5, 0]} />
      <SkillNetwork position={[-5, 1.5, -2]} scale={0.8} />
      <ProjectLab position={[0, -3.8, -1]} scale={0.85} />
    </>
  );
}

export default UniverseScene;
