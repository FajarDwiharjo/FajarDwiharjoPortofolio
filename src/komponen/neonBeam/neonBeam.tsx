import { useEffect, useState } from "react";

type Beam = {
  id: number;
  top: string;
  left: string;
  color: {
    outer: string;
    inner: string;
    core: string;
  };
  rotation: string;
  delay: number;
};

const neonColors = [
  {
    outer: "bg-pink-500",
    inner: "bg-pink-300",
    core: "bg-white",
  },
  {
    outer: "bg-cyan-400",
    inner: "bg-cyan-200",
    core: "bg-white",
  },
  {
    outer: "bg-purple-400",
    inner: "bg-purple-200",
    core: "bg-white",
  },
  {
    outer: "bg-blue-400",
    inner: "bg-blue-200",
    core: "bg-white",
  },
  {
    outer: "bg-green-400",
    inner: "bg-green-200",
    core: "bg-white",
  },
  {
    outer: "bg-yellow-400",
    inner: "bg-yellow-200",
    core: "bg-white",
  },
];

function randomBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export default function NeonStorm() {
  const [beams, setBeams] = useState<Beam[]>([]);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const spawnBeam = () => {
      const newBeams = Array.from({ length: Math.floor(Math.random() * 4) + 2 }).map((_, i) => ({
        id: Date.now() + i,
        top: `${randomBetween(0, 100)}%`,
        left: `${randomBetween(0, 100)}%`,
        color: neonColors[Math.floor(Math.random() * neonColors.length)],
        rotation: `0deg`,
        delay: randomBetween(0, 0.3),
      }));

      setBeams((prev) => [...prev, ...newBeams]);

      // Remove after 2.5s
      setTimeout(() => {
        setBeams((prev) =>
          prev.filter((b) => !newBeams.some((nb) => nb.id === b.id))
        );
      }, 2500);

      // Next spawn between 0–1s
      timeoutId = setTimeout(spawnBeam, randomBetween(0, 1000));
    };

    spawnBeam(); // Start it

    return () => clearTimeout(timeoutId);
  }, []);

  return (
  <div className="absolute top-0 left-0 w-full h-full z-[-10] pointer-events-none overflow-hidden">
    {beams.map((beam) => (
      <div
        key={beam.id}
        className="absolute w-[20px] h-[100vh] animate-[neonBeam_2s_linear] opacity-70"
        style={{
          top: beam.top,
          left: beam.left,
          transform: `rotate(${beam.rotation})`,
          animationDelay: `${beam.delay}s`,
        }}
      >
        {/* Outer glow */}
        <div className={`w-full h-full ${beam.color.outer} blur-[4px] absolute`} />
        {/* Inner glow */}
        <div className={`w-[10px] h-full ${beam.color.inner} blur-[1px] absolute left-1/2 -translate-x-1/2`} />
        {/* White core */}
        <div className={`w-[5px] h-full ${beam.color.core} absolute left-1/2 -translate-x-1/2`} />
      </div>
    ))}
  </div>
);
}
