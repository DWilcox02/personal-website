
import ReturnHome from "../components/return_home";
import PageProps from "./page_props";

interface ExperienceCardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
  bulletPoints: string[];
  date: string;
}

function ExperienceCard({
  imageSrc,
  title,
  subtitle,
  description,
  bulletPoints,
  date,
}: ExperienceCardProps) {
  return (
    <div className="w-full">
      <div className="flex items-start">
        <p className="top-0 left-0 bg-gray-500 p-1 rounded-tl-md rounded-tr-md text-sm inline-block font-bold">
          {date}
        </p>
      </div>
      <div className="bg-white shadow-md rounded-md rounded-tl-none p-6 flex flex-col lg:flex-row items-center lg:items-start">
        <img src={imageSrc} alt={title} className="w-32 md:w-56 lg:w-64" />
        <div className="flex flex-col items-start p-4 text-left">
          <h2 className="text-2xl font-semibold text-gray-600">{title}</h2>
          <h3 className="text-xl text-gray-600">{subtitle}</h3>
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

function ExperienceCardList() {
  const ExperienceCards = [
    {
      imageSrc: "/experience/mitiga.webp",
      title: "Mitiga",
      subtitle: "Cloud Security and Incident Response",
      description:
        "Mitiga is an incident response company that specialises in cloud-based architectures, including AWS, Google Cloud, Azure, and more. During my 6 month internship at Mitiga, I received hands-on experience with live ransomware response cases, where I helped deliver our investigation findings to clients. My jobs included:",
      bulletPoints: [
        "Creating an ER model and setting up our back-end account and project management system",
        "Configuring our client-facing 'Mitiga Platform' to deliver investigation findings",
        "Assisting in client onboarding by connecting our platform with their architectures",
      ],
      date: "Sep 2021 - Feb 2022",
    },
    {
      imageSrc: "/experience/bsa.png",
      title: "Assistant Scoutmaster",
      subtitle: "Scouts BSA",
      description:
        "I became an Assistant Scoutmaster as soon as I turned 18. During my gap year I was very active in our scouting troop, helping lead campouts, hikes, and weekly meetings. While I don't spend as much time helping the troop nowadays due to university studies, I still try to make time to help out our troop. Skills I've picked up as a leader include:",
      bulletPoints: [
        "Teamwork by working with other scoutmasters to run events",
        "Time management and organisation when working at larger, district-level events",
        "Helping younger scouts plan cooking and cleaning, and teaching first aid ",
      ],
      date: "Sep 2020 - Present",
    },
    {
      imageSrc: "/experience/tutoring.png",
      title: "Mathematics Tutoring",
      subtitle: "Students Aged 14 - 18",
      description:
        "I've been a mathematics tutor for 3 years now, covering a wide range of topics and year levels. My students have demonstrated an improvement in both grades and work ethic. As the years progressed, my communications skills have become significantly better. My personal management skills have also improved as I communicate with my employers and students to set up meetings and payments.",
      bulletPoints: [],
      date: "Jan 2019 - Present",
    },
    // Add more ExperienceCard objects here
  ];

  return (
    <div className="pointer-events-auto mx-10 h-screen overflow-y-scroll">
      <div className="grid grid-cols-1 gap-4 w-full">
        {ExperienceCards.map((experienceCard, index) => (
          <ExperienceCard key={index} {...experienceCard} />
        ))}
        <div className="h-56"></div>
      </div>
    </div>
  );
}

export default function WorkExperience({
  onHover,
  returnHome,
}: PageProps) {

  return (
    <div className={`z-30 relative h-screen w-full top-8`}>
      <ReturnHome
        returnHome={returnHome}
        onHover={onHover}
        title="Work Experience"
      ></ReturnHome>
      <div className="pt-4">
        <ExperienceCardList></ExperienceCardList>
      </div>
    </div>
  );
}
