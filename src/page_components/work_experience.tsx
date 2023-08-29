import FancyButton from "../components/fancy_button";
import ExperienceCardList from "../components/experience_card_list";

interface WorkExperienceProps {
  onHover: (isHovering: boolean) => void;
  returnHome: () => void;
}

export default function WorkExperience({
  onHover,
  returnHome,
}: WorkExperienceProps) {
  return (
    <div className="mx-10 fixed top-20 h-screen z-0">
      <div className="flex flex-col items-start justify-start">
        <FancyButton
          text="Home"
          onHover={onHover}
          onClick={returnHome}
          bgOpacity={50}
        ></FancyButton>
      </div>
      <div className="flex flex-col items-start justify-start text-left pt-10">
        <h1 className="text-4xl">Work Experience</h1>
      </div>
      <hr />
      <div className="">
        <div className="pt-4">
          <ExperienceCardList></ExperienceCardList>
        </div>
      </div>
    </div>
  );
}
