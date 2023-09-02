import PageProps from "./page_props";
import ReturnHome from "../components/return_home";
import ExpandingGallery from "../components/expanding_gallery";

function AboutMe({ onHover, returnHome }: PageProps) {
  const images1 = [
    { id: 1, src: "/about_me/appalaichan.jpg", alt: "Image 1" },
    { id: 2, src: "/about_me/eagles.jpg", alt: "Image 2" },
    { id: 3, src: "/about_me/fuji.jpg", alt: "Image 3" },
  ];

  const images2 = [
    { id: 2, src: "/about_me/tower_bridge.jpg", alt: "Image 2" },
    { id: 3, src: "/about_me/fuji2.jpg", alt: "Image 3" },
    { id: 1, src: "/about_me/thames_path.jpg", alt: "Image 1" },
    { id: 4, src: "/about_me/euan.jpg", alt: "Image 4" },
  ];

  const images3 = [
    { id: 1, src: "/about_me/ballroom.jpg", alt: "Image 1" },
    { id: 2, src: "/about_me/monkey.jpg", alt: "Image 2" },
  ];

  const images4 = [
    { id: 1, src: "/about_me/kent.jpg", alt: "Image 1" },
    { id: 2, src: "/about_me/malcolm.jpg", alt: "Image 2" },
    { id: 3, src: "/about_me/snowboarding.jpg", alt: "Image 3" },
  ];

  return (
    <div className="z-30 relative top-8 h-screen pb-36 flex flex-col items-center w-full">
      <div className="w-full pb-4">
        <ReturnHome
          returnHome={returnHome}
          onHover={onHover}
          title="About Me"
        ></ReturnHome>
      </div>
      <div className="pointer-events-auto overflow-y-scroll h-screen">
        <div className="bg-gray-200 bg-opacity-20 mx-10 rounded-md shadow-xl">
          <p className="text-black p-2 text-left leading-snug">
            I'm a 21 year-old student at Imperial College London. I love
            backpacking, camping, rock climbing, snowboarding, and ballroom
            dancing. I was born in London, but I hope to start my career in the
            US after university.
            <br />
            <br />
            Scouting has always been a huge part of my life. One of my proudest
            achievements is earning Eagle Scout, and I have continued scouting
            to this day.
          </p>
        </div>
        <div className="justify-center items-center mx-10 pt-4">
          <ExpandingGallery
            images1={images1}
            images2={images2}
            images3={images3}
            images4={images4}
            onHover={onHover}
          ></ExpandingGallery>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
