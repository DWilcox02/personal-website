import { useState } from "react";

interface FancyButtonProps {
  text: string;
  onHover: (isHovering: boolean) => void;
  onClick: () => void;
}

export default function FancyButton({
  text,
  onHover,
  onClick,
}: FancyButtonProps) {

  const [isHover, setIsHover] = useState(false);

  const style = {
    borderColor: "rgba(255, 255, 255, 0.5)",
    boxShadow: isHover ? "inset -208px 0 0 0 rgba(117, 19, 93, 0.5), inset 208px 0 0 0 rgba(117, 19, 93, 0.5" : "",
    transition: "0.25s ease-in"
  };

  return (
    <button
      className={`z-50 flex justify-center align-middle bg-pink-500 bg-opacity-30 px-8 py-4 rounded-3xl border-2 cursor-none door-hover`}
      style={style}
      onMouseEnter={() => {
        onHover(true);
        setIsHover(true);
      }}
      onMouseLeave={() => {
        onHover(false);
        setIsHover(false);
      }}
      onClick={onClick}
    >
      <div className="">{text}</div>
    </button>
  );
}
