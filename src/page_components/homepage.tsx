import Title from "../components/title";
import ImageGallery from "../components/image_gallery";
import FancyButton from "../components/fancy_button";

interface HomePageProps {
  onButtonHover: (isHovering: boolean) => void;
  workExperienceClick: () => void;
  academicsClick: () => void;
}

export default function HomePage({
  onButtonHover,
  workExperienceClick,
  academicsClick,
}: HomePageProps) {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <Title></Title>
        <ImageGallery></ImageGallery>
        <div className="grid grid-cols-2 gap-8 mt-4">
          <FancyButton
            text="Work Experience"
            onHover={onButtonHover}
            onClick={workExperienceClick}
          ></FancyButton>
          <FancyButton
            text="Academics"
            onHover={onButtonHover}
            onClick={academicsClick}
          ></FancyButton>
        </div>
      </div>
      <div className="absolute bottom-1 right-4 z-30">
        <a href="" className="cursor-none">
          <div className="text-xl m-0 underline">
            Website Source Code 
          </div>
          <p>(Made with Typescript, React, and TailwindCSS)</p>
        </a>
      </div>
    </>
  );
}
