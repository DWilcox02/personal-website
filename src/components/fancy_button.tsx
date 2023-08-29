
interface FancyButtonProps {
  text: string;
  onHover: (isHovering: boolean) => void;
  onClick: () => void;
  bgOpacity: number;
}

export default function FancyButton({ text, onHover, onClick, bgOpacity = 25 }: FancyButtonProps) {
  return (
    <button
      className={`z-30 flex justify-center align-middle bg-pink-500 bg-opacity-${bgOpacity.toString()} px-8 py-4 rounded-sm border-2 cursor-none text-xl`}
      style={{
        borderColor: "rgba(255, 255, 255, 0.5)",
      }}
      onMouseEnter={() => {
        onHover(true)
      }}
      onMouseLeave={() => onHover(false)}
      onClick={onClick}
    >
      <div className="">
        {text}
      </div>
    </button>
  );
}
