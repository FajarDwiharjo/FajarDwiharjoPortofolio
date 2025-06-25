import { useEffect, useState } from "react";

export default function LoadingBeam() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2500;
    const interval = 16;
    const totalSteps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress((currentStep / totalSteps) * 100);
      if (currentStep >= totalSteps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="relative w-full h-6 bg-transparent rounded-full overflow-hidden">
        {/* Outer Glow */}
        <div
          className="absolute top-1/2 -translate-y-1/2 h-[16px] blur-[4px] bg-[#39FF14] transition-all duration-75"
          style={{
            width: `${progress}%`,
            left: 0,
          }}
        />
        {/* Inner Glow */}
        <div
          className="absolute top-1/2 -translate-y-1/2 h-[8px] blur-[1px] bg-[#b3ffcc] transition-all duration-75"
          style={{
            width: `${progress}%`,
            left: 0,
          }}
        />
        {/* Core Filament */}
        <div
          className="absolute top-1/2 -translate-y-1/2 h-[4px] bg-white transition-all duration-75"
          style={{
            width: `${progress}%`,
            left: 0,
          }}
        />
      </div>
    </div>
  );
}
