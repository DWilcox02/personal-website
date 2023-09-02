import FancyButton from "./fancy_button";

interface ReturnHomeProps {
  title: string;
  onHover: (isHovering: boolean) => void;
  returnHome: () => void;
}

function ReturnHome({ title, onHover, returnHome }: ReturnHomeProps) {
  return (
    <div className="flex flex-row items-start justify-start mx-10">
      <FancyButton
        text="Home"
        onHover={onHover}
        onClick={returnHome}
      ></FancyButton>
      <div className="text-left pt-4 pl-4">
        <h1 className="text-2xl md:text-4xl lg:text-4xl">{title}</h1>
        <hr className="border-1 border-white w-full" />
      </div>
    </div>
  );
}

export default ReturnHome;
