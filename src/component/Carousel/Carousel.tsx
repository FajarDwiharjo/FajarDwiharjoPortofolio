import React, { useEffect, useRef, useState } from "react";
import arrowBlack from "../../assets/arrow_black.svg";

interface CarouselItem {
  image: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  autoPlayreverse?: boolean;
  speed?: number;
}

const ImageCarousel: React.FC<CarouselProps> = ({
  items,
  autoPlayreverse = false,
  speed = 31,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // modal image

  const animationName = autoPlayreverse ? "slide-loop-reverse" : "slide-loop";

  useEffect(() => {
    if (containerRef.current) {
      const firstSet = containerRef.current.querySelector(
        ".carousel-set"
      ) as HTMLDivElement;
      if (firstSet) {
        setTrackWidth(firstSet.offsetWidth);
      }
    }
  }, [items]);

  return (
    <>
      <div className="w-screen overflow-hidden select-none my-10">
        <div
          ref={containerRef}
          className="flex flex-row gap-10 whitespace-nowrap will-change-transform leading-none w-max"
          style={{
            animation: `${animationName} ${speed}s linear infinite`,
            "--slide-distance": `-${trackWidth}px`,
            animationPlayState: isHovered ? "paused" : "running",
          } as React.CSSProperties}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {[...Array(2)].map((_, i) => (
            <div className="carousel-set flex flex-row gap-10" key={i}>
              {items.map((item, index) => (
                <div
                  key={`${i}-${index}`}
                  className="group relative flex max-w-[550px] max-h-[400px] bg-[#111111] py-12 px-10 flex-shrink-0 rounded-sm cursor-pointer"
                  onClick={() => setSelectedImage(item.image)} // click to enlarge
                >
                  <img
                    src={item.image}
                    alt={`Project preview ${index}`}
                    className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:blur-sm"
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex flex-row bg-white text-black px-4 py-2 rounded gap-2 items-center">
                      Click to View
                      <img src={arrowBlack} alt="Arrow icon" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

{selectedImage && (
  <div
    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 cursor-pointer"
    onClick={() => setSelectedImage(null)}
  >
    <div
      className="relative w-full h-full flex items-center justify-center overflow-hidden"
      style={{
        '--x': '50%',
        '--y': '50%',
      }as React.CSSProperties
    }
      onMouseMove={(e) => {
        const container = e.currentTarget;
        const rect = container.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        container.style.setProperty('--x', `${x}%`);
        container.style.setProperty('--y', `${y}%`);
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.setProperty('--x', `50%`);
        e.currentTarget.style.setProperty('--y', `50%`);
      }}
    >
      <img
        src={selectedImage}
        alt="Full size"
        className="w-[75%] h-[75%] object-contain hover:scale-150 transition-transform duration-300 ease-in-out"
        style={{
          transformOrigin: 'var(--x) var(--y)',
        }}
      />
    </div>
  </div>
)}

    </>
  );
};

export default ImageCarousel;
