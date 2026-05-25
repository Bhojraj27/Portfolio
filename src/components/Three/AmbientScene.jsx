import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ambientParticleCount = 180;

function useViewportProfile() {
  const [profile, setProfile] = useState({
    isCompact: false,
    isLaptop: false,
  });

  useEffect(() => {
    const updateProfile = () => {
      const width = window.innerWidth;

      setProfile({
        isCompact: width < 900,
        isLaptop: width >= 900 && width < 1500,
      });
    };

    updateProfile();
    window.addEventListener("resize", updateProfile);

    return () => window.removeEventListener("resize", updateProfile);
  }, []);

  return profile;
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return prefersReducedMotion;
}

function BackgroundParticles({ reducedMotion, palette, isCompact }) {
  const pointsRef = useRef();
  const positions = useMemo(() => {
    const vertices = [];

    for (let index = 0; index < ambientParticleCount; index += 1) {
      vertices.push(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
      );
    }

    return new Float32Array(vertices);
  }, []);

  useFrame((_, delta) => {
    if (!pointsRef.current || reducedMotion) return;

    pointsRef.current.rotation.y += delta * 0.01;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color={palette.particle}
        size={isCompact ? 0.018 : 0.025}
        transparent
        opacity={isCompact ? palette.particleOpacity * 0.55 : palette.particleOpacity}
      />
    </points>
  );
}

function usePointerTarget() {
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerMove = (event) => {
      target.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -((event.clientY / window.innerHeight) * 2 - 1),
      };
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return target;
}

function OrbitingNodes({ reducedMotion, palette }) {
  const orbitGroupRef = useRef();

  useFrame((state, delta) => {
    if (!orbitGroupRef.current || reducedMotion) return;

    orbitGroupRef.current.rotation.y += delta * 0.22;
    orbitGroupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.06;
  });

  return (
    <group ref={orbitGroupRef}>
      {[
        { position: [1.45, 0.28, 0], color: palette.primary, scale: 0.16 },
        { position: [-1.12, -0.8, 0.45], color: palette.secondary, scale: 0.12 },
        { position: [0.35, 1.34, -0.45], color: palette.highlight, scale: 0.1 },
      ].map((node) => (
        <mesh key={node.color} position={node.position} scale={node.scale}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color={node.color}
            emissive={node.color}
            emissiveIntensity={0.28}
            roughness={0.25}
            metalness={0.5}
          />
        </mesh>
      ))}
    </group>
  );
}

function SignatureCluster({ reducedMotion, palette, isLaptop }) {
  const rootRef = useRef();
  const coreRef = useRef();
  const pointerTarget = usePointerTarget();

  useFrame((state, delta) => {
    if (!rootRef.current || !coreRef.current) return;

    rootRef.current.rotation.y = THREE.MathUtils.lerp(
      rootRef.current.rotation.y,
      pointerTarget.current.x * 0.12,
      reducedMotion ? 0.02 : 0.05,
    );
    rootRef.current.rotation.x = THREE.MathUtils.lerp(
      rootRef.current.rotation.x,
      pointerTarget.current.y * 0.08,
      reducedMotion ? 0.02 : 0.05,
    );

    if (!reducedMotion) {
      coreRef.current.rotation.x += delta * 0.16;
      coreRef.current.rotation.y += delta * 0.22;
      coreRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 0.9) * 0.02);
    }
  });

  return (
    <>
      <group
        ref={rootRef}
        position={isLaptop ? [2.55, -0.06, -0.9] : [2.7, -0.08, -0.95]}
        scale={isLaptop ? 0.78 : 0.88}
      >
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[0.92, 2]} />
          <meshStandardMaterial
            color={palette.core}
            emissive={palette.primary}
            emissiveIntensity={0.58}
            metalness={0.42}
            roughness={0.18}
            wireframe
          />
        </mesh>

        <mesh scale={0.78}>
          <sphereGeometry args={[1, 48, 48]} />
          <meshStandardMaterial
            color={palette.secondary}
            emissive={palette.secondary}
            emissiveIntensity={0.15}
            transparent
            opacity={0.05}
            roughness={0.12}
            metalness={0.4}
          />
        </mesh>

        <mesh rotation={[Math.PI / 2.3, 0.25, 0]}>
          <torusGeometry args={[1.26, 0.012, 18, 160]} />
          <meshBasicMaterial color={palette.secondary} transparent opacity={palette.ringOpacity * 0.78} />
        </mesh>

        <OrbitingNodes reducedMotion={reducedMotion} palette={palette} />
      </group>

      <group position={[-1.15, -1.7, -2.25]} rotation={[0.15, 0.25, 0.12]}>
        <mesh>
          <icosahedronGeometry args={[0.78, 1]} />
          <meshStandardMaterial
            color={palette.core}
            emissive={palette.secondary}
            emissiveIntensity={0.2}
            wireframe
            transparent
            opacity={0.1}
          />
        </mesh>
      </group>
    </>
  );
}

function FloatingForms({ reducedMotion, palette, isLaptop }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (!groupRef.current || reducedMotion) return;

    groupRef.current.rotation.y += delta * 0.045;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.18) * 0.08;
  });

  return (
    <group ref={groupRef}>
      <mesh position={isLaptop ? [-0.45, -2.2, -2.5] : [-1.35, -2.05, -2.5]} rotation={[0.5, 0.25, 0.3]}>
        <icosahedronGeometry args={[0.72, 1]} />
        <meshStandardMaterial
          color={palette.core}
          emissive={palette.primary}
          emissiveIntensity={0.48}
          wireframe
          transparent
          opacity={0.18}
        />
      </mesh>

      <mesh position={isLaptop ? [3.15, -1.45, -2.2] : [3.45, -1.4, -2.25]} rotation={[0.2, 0.5, 0.1]}>
        <octahedronGeometry args={[0.88, 1]} />
        <meshStandardMaterial
          color={palette.core}
          emissive={palette.secondary}
          emissiveIntensity={0.42}
          wireframe
          transparent
          opacity={0.18}
        />
      </mesh>

      <mesh position={isLaptop ? [3.1, 1.8, -2.8] : [3.45, 1.8, -2.8]} rotation={[0.4, 0.2, 0.5]}>
        <torusGeometry args={[0.62, 0.012, 16, 120]} />
        <meshBasicMaterial color={palette.primary} transparent opacity={palette.formOpacity} />
      </mesh>
    </group>
  );
}

function AmbientScene({ mode }) {
  const reducedMotion = usePrefersReducedMotion();
  const { isCompact, isLaptop } = useViewportProfile();
  const palette =
    mode === "light"
      ? {
          fog: "#f5f8fc",
          primary: "#0f9f75",
          secondary: "#0284c7",
          highlight: "#475569",
          particle: "#0ea5e9",
          particleOpacity: 0.22,
          core: "#e8f0f7",
          ringOpacity: 0.26,
          formOpacity: 0.16,
        }
      : {
          fog: "#08111a",
          primary: "#28e98c",
          secondary: "#38bdf8",
          highlight: "#e2e8f0",
          particle: "#7dd3fc",
          particleOpacity: 0.38,
          core: "#06111b",
          ringOpacity: 0.34,
          formOpacity: 0.24,
        };

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.25]}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
    >
      <fog attach="fog" args={[palette.fog, 5, 12]} />
      <ambientLight intensity={0.52} />
      <directionalLight position={[3, 4, 5]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-4, 2, 2]} intensity={8} color={palette.primary} distance={8} />
      <pointLight position={[4, -2, 1]} intensity={6} color={palette.secondary} distance={8} />
      <BackgroundParticles reducedMotion={reducedMotion} palette={palette} isCompact={isCompact} />
      {!isCompact && <SignatureCluster reducedMotion={reducedMotion} palette={palette} isLaptop={isLaptop} />}
      {!isCompact && <FloatingForms reducedMotion={reducedMotion} palette={palette} isLaptop={isLaptop} />}
    </Canvas>
  );
}

export default memo(AmbientScene);
