import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";

function Stars() {
  const ref = useRef();

  // 🔥 Spread particles across full viewport
  const positions = useMemo(() => {
    const count = 14000;
    const arr = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 40;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 40;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }

    return arr;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.03;
      ref.current.rotation.y -= delta * 0.04;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#a855f7"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function Particles() {
  return (
    <Canvas
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
      style={{ position: "fixed", inset: 0 }}
      camera={{ position: [0, 0, 12] }}
    >
      <color attach="background" args={["#020617"]} />
      <Stars />
    </Canvas>
  );
}