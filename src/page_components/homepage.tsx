import Title from "../components/title";
import ImageGallery from "../components/image_gallery";
import FancyButton from "../components/fancy_button";
import { useState } from "react";

interface HomePageProps {
  onHover: (isHovering: boolean) => void;
  workExperienceClick: () => void;
  academicsClick: () => void;
  aboutMeClick: () => void;
}

export default function HomePage({
  onHover,
  workExperienceClick,
  academicsClick,
  aboutMeClick,
}: HomePageProps) {
  const images = [
    "languages/c.png",
    "languages/haskell.png",
    "languages/java.png",
    "languages/kotlin.png",
    "languages/javascript.png",
    "languages/typescript.png",
    "languages/python.png",
    "languages/sql.png",
  ];

  const gallerySettings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 2000,
    slidesToShow: 5, // Number of images to show at once
    slidesToScroll: 1,
    arrows: false,
  };

  const [isHover, setIsHover] = useState(false);

  const style = {
    background: isHover ? "rgba(200, 200, 200, 0.2)" : "",
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <Title></Title>
        <div
          className="hover:shadow-lg transition-all h-20 rounded-lg"
          style={style}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <ImageGallery
            images={images}
            settings={gallerySettings}
            maxHeightSetting="max-h-16"
          ></ImageGallery>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-4 mx-4">
          <FancyButton
            text="Work Experience"
            onHover={onHover}
            onClick={workExperienceClick}
          ></FancyButton>
          <FancyButton
            text="Academics"
            onHover={onHover}
            onClick={academicsClick}
          ></FancyButton>
          <FancyButton
            text="About Me"
            onHover={onHover}
            onClick={aboutMeClick}
          ></FancyButton>
        </div>
      </div>
      {/* <div className="absolute bottom-1 right-4 z-40">
        <a
          href=""
          className="cursor-none"
          onMouseEnter={() => onHover(true)}
          onMouseLeave={() => onHover(false)}
        >
          <div className="text-xl m-0 underline">Website Source Code</div>
          <p>(Made with Typescript, React, and TailwindCSS)</p>
        </a>
      </div> */}
    </>
  );
}
