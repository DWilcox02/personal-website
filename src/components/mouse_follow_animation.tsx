import { useState, useEffect } from 'react';

export default function MouseFollowAnimation() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="animation absolute w-10 h-10 bg-blue-500 rounded-full"
      style={{
        top: position.y - 5,
        left: position.x - 5,
      }}
    ></div>
  );
}
