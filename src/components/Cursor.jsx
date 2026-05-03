import { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50 w-10 h-10 rounded-full bg-purple-500 opacity-30 blur-xl"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`
      }}
    />
  );
}