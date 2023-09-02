import { useState, useEffect } from "react";

interface MouseFollowAnimationProps {
  hovering: boolean;
}

export default function MouseFollowAnimation({
  hovering,
}: MouseFollowAnimationProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className={`z-0 pointer-events-none animation absolute bg-gray-400 opacity-40 backdrop-blur-sm rounded-full ${
          hovering ? "border-2" : "border-none"
        } border-white`}
        style={{
          top: position.y - 20,
          left: position.x - 20,
        }}
      >
        <div
          className={` ${hovering ? "w-10 h-10" : "w-0 h-0"} transition-all`}
        ></div>
      </div>
      <div
        className="pointer-events-none animation absolute w-1 h-1 bg-white backdrop-blur-sm rounded-full border-white"
        style={{
          top: position.y,
          left: position.x,
        }}
      ></div>
    </>
  );
}
