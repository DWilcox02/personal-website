import ReturnHome from "../components/return_home";
import VerticalLine from "../components/vertical_line";
import PageProps from "./page_props";

interface AcademicsCardProps {
  imageSrc: string;
  title: string;
  description: string;
  bulletPoints: string[];
  date: string;
  isDesktop: boolean;
}

function ImperialCard({
  imageSrc,
  title,
  description,
  bulletPoints,
  date,
}: AcademicsCardProps) {
  return (
    <div className="">
      <div className="flex items-start">
        <p className="top-0 left-0 bg-gray-500 p-1 rounded-tl-md rounded-tr-md text-sm inline-block font-bold">
          {date}
        </p>
      </div>
      <div className="bg-white shadow-md rounded-md rounded-tl-none p-6 flex flex-col h-full">
        <img src={imageSrc} alt={title} className="p-4 h-20 w-56" />
        <div className="flex flex-col items-start px-4 text-left">
          <hr className="border-2 bg-gray-700 w-full mb-2" />
          <p className="text-gray-600 mb-4 leading-snug">{description}</p>
          <ul className="text-gray-600 mb-2 list-disc list-inside">
            {bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function ACSCard({
  imageSrc,
  title,
  description,
  bulletPoints,
  date,
  isDesktop
}: AcademicsCardProps) {
  

  return (
    <div>
      <div className="flex items-start">
        <p className="top-0 left-0 bg-gray-500 p-1 rounded-tl-md rounded-tr-md text-sm inline-block font-bold">
          {date}
        </p>
      </div>
      <div className="bg-white shadow-md rounded-md rounded-tl-none p-6 flex flex-col h-full">
        {isDesktop && (
          <>
            <div className="flex text-left">
              <img src={imageSrc} alt={title} className="p-4 h-40" />
              <VerticalLine colour="rgb(55, 65, 81)"></VerticalLine>
              <p className="text-gray-600 mb-4 leading-snug px-4">
                {description}
              </p>
            </div>
            <div className="flex flex-col px-4 text-left">
              <ul className="text-gray-600 mb-2 list-disc list-inside">
                {bulletPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </>
        )}
        {!isDesktop && (
          <>
            <img src={imageSrc} alt={title} className="p-4 h-56 w-36" />
            <div className="flex flex-col px-4 text-left lg:flex-row">
              <hr className="border-2 bg-gray-700 w-full mb-2" />
              <p className="text-gray-600 mb-4 leading-snug">{description}</p>
              <ul className="text-gray-600 mb-2 list-disc list-inside">
                {bulletPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

interface CardListProps {
  isDesktop: boolean
}

function CardList({isDesktop}: CardListProps) {
  return (
    <div className="pointer-events-auto mx-10 h-full w-full">
      <div className="overflow-y-scroll lg:overflow-y-hidden h-screen flex flex-col">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 w-full">
          <ImperialCard
            imageSrc="/academics/imperial.png"
            title="Imperial College London"
            description="I am a second year Computing student at Imperial College London. I've developed an interest in software engineering, robotics and computer vision, and I'm looking forward to taking AI courses in the future. I achieved First Class Honours (1:1) in first year, and was in the top 15% of our year. Skills that I've picked up so far include:"
            bulletPoints={[
              "Version control and clean code that others can use in group projects",
              "Efficient debugging and unit testing to ensure functionality in edge cases",
              "Strong numerical and analytical skills after taking modules in logic, program reasoning, linear algebra, and calculus",
            ]}
            date="2022 - 2026"
            isDesktop={isDesktop}
          ></ImperialCard>
          <ACSCard
            imageSrc="/academics/acs.png"
            title="ACS Cobham"
            description="During high school I had a great interest in STEM subjects. I received the yearly awards for Computer Science, Chemistry, and MicroEconomics. Other activities I participate in include:"
            bulletPoints={[
              "Math Club, where I was selected to compete at a competition in Vienna",
              "STEM Club President",
              "National Honour Society Member",
              "Team Leader for the 2020 Land Rover Challege, for which we won 1st place",
              "ABRSM Clarinet Grade 8",
            ]}
            date="2009 - 2021"
            isDesktop={isDesktop}
          ></ACSCard>
          <div className="h-64"></div>
        </div>
      </div>
    </div>
  );
}

export default function Academics({ onHover, returnHome, isDesktop }: PageProps) {
  return (
    <div className="z-30 relative top-8 h-screen pb-36 flex flex-col items-center w-full">
      <div className="w-full pb-4">
        <ReturnHome
          returnHome={returnHome}
          onHover={onHover}
          title="Academics"
        ></ReturnHome>
      </div>
      <div className="pt-4 w-full items-center flex justify-center">
        <CardList isDesktop={isDesktop}></CardList>
      </div>
    </div>
  );
}
