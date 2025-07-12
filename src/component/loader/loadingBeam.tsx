import { useEffect, useState } from "react";

type LoadingBeamProps = {
  mode?: "fullscreen" | "inline";
  loop?: boolean;
};

export default function LoadingBeam({ mode = "fullscreen", loop = false }: LoadingBeamProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2500;
    const interval = 16;
    const totalSteps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress((currentStep / totalSteps) * 100);

      if (currentStep >= totalSteps) {
        if (loop) {
          currentStep = 0;
          setProgress(0);
        } else {
          clearInterval(timer);
        }
      }
    }, interval);

    return () => clearInterval(timer);
  }, [loop]);

  const containerClasses =
    mode === "fullscreen"
      ? "fixed inset-0 bg-black z-50 flex items-center justify-center"
      : "w-full relative overflow-hidden bg-transparent";

  return (
    <div className={containerClasses}>
      <div className="relative w-full h-12">
        {/* Outer Glow */}
        <div
          className="absolute top-1/2 -translate-y-1/2 h-[20px] blur-[6px] bg-[#39FF14] transition-all duration-75"
          style={{ width: `${progress}%`, left: 0 }}
        />
        {/* Inner Glow */}
        <div
          className="absolute top-1/2 -translate-y-1/2 h-[10px] blur-[2px] bg-[#b3ffcc] transition-all duration-75"
          style={{ width: `${progress}%`, left: 0 }}
        />
        {/* White Core */}
        <div
          className="absolute top-1/2 -translate-y-1/2 h-[5px] bg-white transition-all duration-75"
          style={{ width: `${progress}%`, left: 0 }}
        />
      </div>
    </div>
  );
}
